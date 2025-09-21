import { useRef, useEffect, useState } from "react"
import YouTube, { type YouTubeProps } from "react-youtube"

interface YouTubePlayerProps {
  videoId: string
  onReady?: (player: YT.Player) => void
  onPlay?: () => void
  onPause?: () => void
  onEnd?: () => void
  onTimeUpdate?: (currentTime: number) => void
  className?: string
  autoplay?: boolean
  controls?: boolean
  width?: string | number
  height?: string | number
}

export function YouTubePlayer({
  videoId,
  onReady,
  onPlay,
  onPause,
  onEnd,
  onTimeUpdate,
  className = "",
  autoplay = false,
  controls = true,
  width = "100%",
  height = "100%"
}: YouTubePlayerProps) {
  const playerRef = useRef<YT.Player | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [isReady, setIsReady] = useState(false)

  const opts: YouTubeProps['opts'] = {
    width: width.toString(),
    height: height.toString(),
    playerVars: {
      autoplay: autoplay ? 1 : 0,
      controls: controls ? 1 : 0,
      rel: 0, // Don't show related videos
      modestbranding: 1, // Minimal YouTube branding
      playsinline: 1, // Play inline on mobile
      enablejsapi: 1, // Enable JavaScript API
      origin: window.location.origin
    }
  }

  const handleReady: YouTubeProps['onReady'] = (event) => {
    playerRef.current = event.target
    setIsReady(true)
    
    // Start time tracking interval
    if (onTimeUpdate) {
      intervalRef.current = setInterval(() => {
        if (playerRef.current) {
          const currentTime = playerRef.current.getCurrentTime()
          onTimeUpdate(currentTime)
        }
      }, 1000)
    }
    
    if (onReady) {
      onReady(event.target)
    }
  }

  const handleStateChange: YouTubeProps['onStateChange'] = (event) => {
    const playerState = event.data
    
    switch (playerState) {
      case window.YT?.PlayerState.PLAYING:
        onPlay?.()
        break
      case window.YT?.PlayerState.PAUSED:
        onPause?.()
        break
      case window.YT?.PlayerState.ENDED:
        onEnd?.()
        break
    }
  }

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Public methods to control the player
  const play = () => {
    if (playerRef.current && isReady) {
      playerRef.current.playVideo()
    }
  }

  const pause = () => {
    if (playerRef.current && isReady) {
      playerRef.current.pauseVideo()
    }
  }

  const seekTo = (seconds: number) => {
    if (playerRef.current && isReady) {
      playerRef.current.seekTo(seconds, true)
    }
  }

  const getCurrentTime = (): number => {
    if (playerRef.current && isReady) {
      return playerRef.current.getCurrentTime()
    }
    return 0
  }

  const getDuration = (): number => {
    if (playerRef.current && isReady) {
      return playerRef.current.getDuration()
    }
    return 0
  }

  const getPlayerState = (): number => {
    if (playerRef.current && isReady) {
      return playerRef.current.getPlayerState()
    }
    return -1
  }

  // Expose player control methods
  useEffect(() => {
    if (isReady && playerRef.current) {
      // Attach control methods to the component instance
      const component = {
        play,
        pause,
        seekTo,
        getCurrentTime,
        getDuration,
        getPlayerState,
        player: playerRef.current
      }
      
      // Store reference for parent components
      ;(YouTubePlayer as any).playerInstance = component
    }
  }, [isReady])

  return (
    <div className={`youtube-player-wrapper ${className}`}>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={handleReady}
        onStateChange={handleStateChange}
        className="w-full h-full"
      />
    </div>
  )
}

// Export player control interface
export interface YouTubePlayerInstance {
  play: () => void
  pause: () => void
  seekTo: (seconds: number) => void
  getCurrentTime: () => number
  getDuration: () => number
  getPlayerState: () => number
  player: YT.Player
}