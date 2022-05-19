import Events from "../../images/icons/events.png"
import Friends from "../../images/icons/friends.png"
import Groups from "../../images/icons/groups.png"
import Marketplace from "../../images/icons/marketplace.png"
import Pages from "../../images/icons/pages.png"
import Saved from "../../images/icons/saved.png"
import Watch from "../../images/icons/watch.png"
import Weather from "../../images/icons/weather.png"
import BusinessManager from "../../images/icons/businessmanager.png"
import Jobs from "../../images/icons/jobs.png"
import Memories from "../../images/icons/memories.png"
import Gaming from "../../images/icons/gaming.png"
import Playgames from "../../images/icons/playgames.png"
import recentads from "../../images/icons/recentads.png"
import AdsManager from "../../images/icons/adsmanager.png"
 
 
 
const Social = [
   {
       bgcolor:{backgroundColor:"yellow"},
       imgg:Events,
    heading:"Events",
    detail:"Organise or find events and other things to do online and nearby"
   },
   {
       bgcolor:{backgroundColor:"green"},
       imgg:Friends,
     heading:"Friends",
     detail:"Search for friends or people you may know."
    },
    {
        bgcolor:{backgroundColor:"orange"},
        imgg:Groups,
     heading:"Groups",
     detail:"Connect with people who share your interests."
    },
    {
        bgcolor:{backgroundColor:"purple"},
        imgg:Pages,
     heading:"Pages",
     detail:"See relevant posts from people and Pages that you follow."
    },
 
 ]
 const Entertainment = [
   
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:Gaming,
     heading:"Gaming",
     detail:"Watch and connect with your favourite games and streamers."
    },
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:Playgames,
     heading:"Play games",
     detail:"Play your favourite games."
    },
     {
         bgcolor:{backgroundColor:"wheat"},
         imgg:Watch,
      heading:"Watch",
      detail:"A video destination personalised to your interests and connections."
     },
  
  ]
 const Shopping = [
   
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:Marketplace,
     heading:"Marketplace",
     detail:"Watch and connect with your favourite games and streamers."
    },
    
  
  ]
 const Personal = [
   
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:recentads,
     heading:"Recent ad Activity",
     detail:"See all of the ads you've interacted with on Facebook."
    },
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:Memories,
     heading:"Memories",
     detail:"Browse your old photos, videos and posts on Facebook."
    },
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:Saved,
     heading:"Saved",
     detail:"Find posts, photos and videos that you've saved for later."
    },
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:Weather,
     heading:"Weather",
     detail:"Check your local forecast and sign up for daily weather notifications."
    },
    
  
  ]
 const Professional = [
   
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:AdsManager,
     heading:"Ads Manager",
     detail:"Create, manage and track the performance of your ads."
    },
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:BusinessManager,
     heading:"Business Manager",
     detail:"A better way to manage your business across Facebook and Instagram, all in one place"
    },
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:Jobs,
     heading:"Jobs",
     detail:"Find a job that's right for you."
    }
    
  
  ]
 const rigmenu1 = [
   
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:AdsManager,
     heading:"Post",
    },
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:BusinessManager,
     heading:"Story",
    },
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:Jobs,
     heading:"Room",
    }
  ]
 const rigmenu2 = [
   
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:AdsManager,
     heading:"Page",
    },
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:BusinessManager,
     heading:"Ad",
    },
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:Jobs,
     heading:"Group",
    },
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:Jobs,
     heading:"Event",
    },
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:Jobs,
     heading:"Marketplace Listing",
    },
    {
        bgcolor:{backgroundColor:"wheat"},
        imgg:Jobs,
     heading:"Job",
    }
  ]

  export default Social;
  export {Entertainment,Shopping,Personal,Professional,rigmenu1,rigmenu2}