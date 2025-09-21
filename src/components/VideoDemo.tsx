import { useState,  useRef } from "react"
import { StampCard } from "./StampCard"
import { YouTubePlayer, type YouTubePlayerInstance } from "./YouTubePlayer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Pause, RotateCcw, Trophy, ExternalLink, Eye, Calendar } from "lucide-react"
import sampleVideoData from "@/data/sample-video.json"

interface UserProgress {
  completedStamps: string[]
  currentTimestamp: number
  totalStampsEarned: number
  accuracy: number
}

export function VideoDemo() {
  const [currentStamp, setCurrentStamp] = useState(0)
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedStamps: [],
    currentTimestamp: 0,
    totalStampsEarned: 0,
    accuracy: 0
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const playerRef = useRef<YouTubePlayerInstance | null>(null)

  const { title, description, stamps, url,  channel, views, publishedDate, videoId } = sampleVideoData
  const currentStampData = stamps[currentStamp]

  const handlePlayerReady = (player: YT.Player) => {
    setDuration(player.getDuration())
    // Store player reference for manual control
    playerRef.current = {
      play: () => player.playVideo(),
      pause: () => player.pauseVideo(),
      seekTo: (seconds: number) => player.seekTo(seconds, true),
      getCurrentTime: () => player.getCurrentTime(),
      getDuration: () => player.getDuration(),
      getPlayerState: () => player.getPlayerState(),
      player
    }
  }

  const handleTimeUpdate = (time: number) => {
    setCurrentTime(time)
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleEnd = () => {
    setIsPlaying(false)
  }

  const handleAnswer = (stampId: string, _choiceId: string, isCorrect: boolean) => {
    setUserProgress(prev => {
      const newCompletedStamps = [...prev.completedStamps, stampId]
      const newTotalEarned = prev.totalStampsEarned + (isCorrect ? 1 : 0)
      const newAccuracy = newTotalEarned / newCompletedStamps.length * 100

      return {
        ...prev,
        completedStamps: newCompletedStamps,
        totalStampsEarned: newTotalEarned,
        accuracy: Math.round(newAccuracy)
      }
    })

    // Auto-advance to next stamp after a delay
    setTimeout(() => {
      if (currentStamp < stamps.length - 1) {
        setCurrentStamp(prev => prev + 1)
      }
    }, 2000)
  }

  const resetDemo = () => {
    setCurrentStamp(0)
    setUserProgress({
      completedStamps: [],
      currentTimestamp: 0,
      totalStampsEarned: 0,
      accuracy: 0
    })
    setCurrentTime(0)
    setIsPlaying(false)
    if (playerRef.current) {
      playerRef.current.seekTo(0)
      playerRef.current.pause()
    }
  }

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    }
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const goToStamp = (index: number) => {
    setCurrentStamp(index)
    if (playerRef.current) {
      playerRef.current.seekTo(stamps[index].timestamp)
    }
  }

  const togglePlayback = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause()
      } else {
        playerRef.current.play()
      }
    }
  }

  const openYouTubeVideo = () => {
    window.open(url, '_blank')
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Video Header */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-2xl mb-2">{title}</CardTitle>
              <p className="text-muted-foreground mb-3">{description}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span className="font-medium">{channel}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{publishedDate}</span>
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={openYouTubeVideo}
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Watch on YouTube
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Embedded YouTube Player */}
          <div className="relative rounded-lg aspect-video mb-4 overflow-hidden">
            <YouTubePlayer
              videoId={videoId}
              onReady={handlePlayerReady}
              onPlay={handlePlay}
              onPause={handlePause}
              onEnd={handleEnd}
              onTimeUpdate={handleTimeUpdate}
              className="w-full h-full"
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
          
          {/* Video Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={togglePlayback}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? "Pause" : "Play"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={resetDemo}
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
              <div className="text-sm text-muted-foreground font-mono">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
            
            {/* Progress Stats */}
            <div className="flex items-center gap-4">
              <Badge variant="secondary">
                <Trophy className="w-4 h-4 mr-1" />
                {userProgress.totalStampsEarned}/{stamps.length} Stamps
              </Badge>
              {userProgress.completedStamps.length > 0 && (
                <Badge variant="secondary">
                  {userProgress.accuracy}% Accuracy
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stamp Navigation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Video Stamps Timeline</CardTitle>
          <p className="text-sm text-muted-foreground">
            Interactive quiz questions appear at key moments in the video
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {stamps.map((stamp, index) => {
              const isCompleted = userProgress.completedStamps.includes(stamp.id)
              const isCurrent = index === currentStamp
              
              return (
                <Button
                  key={stamp.id}
                  variant={isCurrent ? "default" : isCompleted ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => goToStamp(index)}
                  className="relative"
                >
                  {formatTime(stamp.timestamp)}
                  {isCompleted && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full" />
                  )}
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Current Stamp */}
      {currentStampData && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-center">
            Stamp {currentStamp + 1} of {stamps.length}
          </h3>
          <StampCard
            id={currentStampData.id}
            timestamp={currentStampData.timestamp}
            question={currentStampData.question}
            difficulty={currentStampData.difficulty as "easy" | "medium" | "hard"}
            choices={currentStampData.choices}
            explanation={currentStampData.explanation}
            onAnswer={handleAnswer}
            isCompleted={userProgress.completedStamps.includes(currentStampData.id)}
          />
        </div>
      )}

      {/* Demo Complete */}
      {userProgress.completedStamps.length === stamps.length && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="text-center py-8">
            <Trophy className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              Demo Complete! 🎉
            </h3>
            <p className="text-green-700 mb-4">
              You've earned {userProgress.totalStampsEarned} out of {stamps.length} stamps 
              with {userProgress.accuracy}% accuracy!
            </p>
            <div className="flex gap-3 justify-center">
              <Button onClick={resetDemo} className="bg-green-600 hover:bg-green-700">
                Try Again
              </Button>
              <Button 
                variant="outline" 
                onClick={openYouTubeVideo}
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Watch Full Video
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}