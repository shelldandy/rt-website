import navigation from './navigation'
import video from './video';
import team from './team'
import roadmap from './roadmap'
import problem from './problem'
import burger from './burger'
import newsletter from './newsletter'
import subscribe from './subscribe'
import mobileLinks from './mobileLinks'

const home = () => {
  navigation()
  burger()
  mobileLinks()
  video()
  team()
  roadmap()
  problem()
  newsletter()
  subscribe()
}

export default home
