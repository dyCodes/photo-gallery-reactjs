import { useEffect, useState } from 'react';
import './App.css';
import { Container, Divider } from "@mui/material";
import Footer from "./components/Foooter";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

const App = () => {
  const [photos, setPhotos] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [term, setTerm] = useState("Random")

  useEffect(() => {
    setPhotos([
      {
        "id": "8kqtv6dMNSg",
        "created_at": "2022-03-31T10:33:43-04:00",
        "updated_at": "2022-04-14T23:48:13-04:00",
        "promoted_at": null,
        "width": 8256,
        "height": 5504,
        "color": "#d9d9d9",
        "blur_hash": "LOHxvk4nDix^?vMx00?aNGV[M{%L",
        "description": null,
        "alt_description": null,
        "urls": {
          "raw": "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixid=MnwzMTk2NjF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1",
          "full": "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMTk2NjF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=85",
          "regular": "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=1080",
          "small": "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=400",
          "thumb": "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=200",
          "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1648737154448-ccf0cafae1c2"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/8kqtv6dMNSg",
          "html": "https://unsplash.com/photos/8kqtv6dMNSg",
          "download": "https://unsplash.com/photos/8kqtv6dMNSg/download?ixid=MnwzMTk2NjF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MDAzODAzMQ",
          "download_location": "https://api.unsplash.com/photos/8kqtv6dMNSg/download?ixid=MnwzMTk2NjF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MDAzODAzMQ"
        },
        "categories": [],
        "likes": 58,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": {
          "impression_urls": [
            "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=10307202&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
          ],
          "tagline": "Closer to what you love",
          "tagline_url": "https://www.microsoft.com/windows/?ocid=UnsplashFY22_soc_pmc_win_",
          "sponsor": {
            "id": "kSlnstJTnY8",
            "updated_at": "2022-04-15T11:39:53-04:00",
            "username": "windows",
            "name": "Windows",
            "first_name": "Windows",
            "last_name": null,
            "twitter_username": "windows",
            "portfolio_url": "https://www.windows.com",
            "bio": "Follow us @Windows. #DoGreatThings",
            "location": null,
            "links": {
              "self": "https://api.unsplash.com/users/windows",
              "html": "https://unsplash.com/@windows",
              "photos": "https://api.unsplash.com/users/windows/photos",
              "likes": "https://api.unsplash.com/users/windows/likes",
              "portfolio": "https://api.unsplash.com/users/windows/portfolio",
              "following": "https://api.unsplash.com/users/windows/following",
              "followers": "https://api.unsplash.com/users/windows/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "windows",
            "total_collections": 1,
            "total_likes": 0,
            "total_photos": 168,
            "accepted_tos": true,
            "for_hire": false,
            "social": {
              "instagram_username": "windows",
              "portfolio_url": "https://www.windows.com",
              "twitter_username": "windows",
              "paypal_email": null
            }
          }
        },
        "topic_submissions": {},
        "user": {
          "id": "kSlnstJTnY8",
          "updated_at": "2022-04-15T11:39:53-04:00",
          "username": "windows",
          "name": "Windows",
          "first_name": "Windows",
          "last_name": null,
          "twitter_username": "windows",
          "portfolio_url": "https://www.windows.com",
          "bio": "Follow us @Windows. #DoGreatThings",
          "location": null,
          "links": {
            "self": "https://api.unsplash.com/users/windows",
            "html": "https://unsplash.com/@windows",
            "photos": "https://api.unsplash.com/users/windows/photos",
            "likes": "https://api.unsplash.com/users/windows/likes",
            "portfolio": "https://api.unsplash.com/users/windows/portfolio",
            "following": "https://api.unsplash.com/users/windows/following",
            "followers": "https://api.unsplash.com/users/windows/followers"
          },
          "profile_image": {
            "small": "https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium": "https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large": "https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "windows",
          "total_collections": 1,
          "total_likes": 0,
          "total_photos": 168,
          "accepted_tos": true,
          "for_hire": false,
          "social": {
            "instagram_username": "windows",
            "portfolio_url": "https://www.windows.com",
            "twitter_username": "windows",
            "paypal_email": null
          }
        }
      },
      {
        "id": "rZMe6PJJlko",
        "created_at": "2022-04-14T05:29:26-04:00",
        "updated_at": "2022-04-15T11:48:01-04:00",
        "promoted_at": "2022-04-15T11:48:01-04:00",
        "width": 4024,
        "height": 6048,
        "color": "#262626",
        "blur_hash": "L768%0ibiv.SMwbcW=V@D4oztSMx",
        "description": null,
        "alt_description": null,
        "urls": {
          "raw": "https://images.unsplash.com/photo-1649928367017-a102ec4e3cca?ixid=MnwzMTk2NjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1",
          "full": "https://images.unsplash.com/photo-1649928367017-a102ec4e3cca?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=85",
          "regular": "https://images.unsplash.com/photo-1649928367017-a102ec4e3cca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=1080",
          "small": "https://images.unsplash.com/photo-1649928367017-a102ec4e3cca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=400",
          "thumb": "https://images.unsplash.com/photo-1649928367017-a102ec4e3cca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=200",
          "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1649928367017-a102ec4e3cca"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/rZMe6PJJlko",
          "html": "https://unsplash.com/photos/rZMe6PJJlko",
          "download": "https://unsplash.com/photos/rZMe6PJJlko/download?ixid=MnwzMTk2NjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MDAzODAzMQ",
          "download_location": "https://api.unsplash.com/photos/rZMe6PJJlko/download?ixid=MnwzMTk2NjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MDAzODAzMQ"
        },
        "categories": [],
        "likes": 0,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {},
        "user": {
          "id": "yYm1Weig7Ts",
          "updated_at": "2022-04-15T11:49:56-04:00",
          "username": "sxoxm",
          "name": "Sven Mieke",
          "first_name": "Sven",
          "last_name": "Mieke",
          "twitter_username": "sxoxm",
          "portfolio_url": null,
          "bio": null,
          "location": "Erlangen, Bavaria, Germany",
          "links": {
            "self": "https://api.unsplash.com/users/sxoxm",
            "html": "https://unsplash.com/@sxoxm",
            "photos": "https://api.unsplash.com/users/sxoxm/photos",
            "likes": "https://api.unsplash.com/users/sxoxm/likes",
            "portfolio": "https://api.unsplash.com/users/sxoxm/portfolio",
            "following": "https://api.unsplash.com/users/sxoxm/following",
            "followers": "https://api.unsplash.com/users/sxoxm/followers"
          },
          "profile_image": {
            "small": "https://images.unsplash.com/profile-1542358354973-b810bb7c9ba9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium": "https://images.unsplash.com/profile-1542358354973-b810bb7c9ba9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large": "https://images.unsplash.com/profile-1542358354973-b810bb7c9ba9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "sxoxm",
          "total_collections": 1,
          "total_likes": 415,
          "total_photos": 261,
          "accepted_tos": true,
          "for_hire": true,
          "social": {
            "instagram_username": "sxoxm",
            "portfolio_url": null,
            "twitter_username": "sxoxm",
            "paypal_email": null
          }
        }
      },
      {
        "id": "8jga3J9A4l4",
        "created_at": "2022-04-14T14:17:34-04:00",
        "updated_at": "2022-04-15T11:40:02-04:00",
        "promoted_at": "2022-04-15T11:40:02-04:00",
        "width": 3931,
        "height": 5591,
        "color": "#c0c0a6",
        "blur_hash": "LdHC7Tt7IpWB?aayR*oe0LR*s:of",
        "description": null,
        "alt_description": null,
        "urls": {
          "raw": "https://images.unsplash.com/photo-1649960123160-95cc0f2d99fb?ixid=MnwzMTk2NjF8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1",
          "full": "https://images.unsplash.com/photo-1649960123160-95cc0f2d99fb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=85",
          "regular": "https://images.unsplash.com/photo-1649960123160-95cc0f2d99fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=1080",
          "small": "https://images.unsplash.com/photo-1649960123160-95cc0f2d99fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=400",
          "thumb": "https://images.unsplash.com/photo-1649960123160-95cc0f2d99fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=200",
          "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1649960123160-95cc0f2d99fb"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/8jga3J9A4l4",
          "html": "https://unsplash.com/photos/8jga3J9A4l4",
          "download": "https://unsplash.com/photos/8jga3J9A4l4/download?ixid=MnwzMTk2NjF8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1MDAzODAzMQ",
          "download_location": "https://api.unsplash.com/photos/8jga3J9A4l4/download?ixid=MnwzMTk2NjF8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1MDAzODAzMQ"
        },
        "categories": [],
        "likes": 4,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {},
        "user": {
          "id": "vrto6ViabxA",
          "updated_at": "2022-04-15T11:49:54-04:00",
          "username": "janisfasel",
          "name": "Janis Fasel",
          "first_name": "Janis",
          "last_name": "Fasel",
          "twitter_username": null,
          "portfolio_url": "https://www.instagram.com/janis.fasel/",
          "bio": "Just having fun with my camera :)",
          "location": "Fribourg, Switzerland",
          "links": {
            "self": "https://api.unsplash.com/users/janisfasel",
            "html": "https://unsplash.com/@janisfasel",
            "photos": "https://api.unsplash.com/users/janisfasel/photos",
            "likes": "https://api.unsplash.com/users/janisfasel/likes",
            "portfolio": "https://api.unsplash.com/users/janisfasel/portfolio",
            "following": "https://api.unsplash.com/users/janisfasel/following",
            "followers": "https://api.unsplash.com/users/janisfasel/followers"
          },
          "profile_image": {
            "small": "https://images.unsplash.com/profile-1641459542222-9731dd370066image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium": "https://images.unsplash.com/profile-1641459542222-9731dd370066image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large": "https://images.unsplash.com/profile-1641459542222-9731dd370066image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "janis.fasel",
          "total_collections": 1,
          "total_likes": 186,
          "total_photos": 20,
          "accepted_tos": true,
          "for_hire": false,
          "social": {
            "instagram_username": "janis.fasel",
            "portfolio_url": "https://www.instagram.com/janis.fasel/",
            "twitter_username": null,
            "paypal_email": null
          }
        }
      },
      {
        "id": "hmkkbJR9Br4",
        "created_at": "2022-04-14T18:45:52-04:00",
        "updated_at": "2022-04-15T11:32:03-04:00",
        "promoted_at": "2022-04-15T11:32:02-04:00",
        "width": 5504,
        "height": 8256,
        "color": "#262626",
        "blur_hash": "LHEyV:pI4mIpVUsCbcXOD%M_Rk%2",
        "description": "Ukrainian Pysanky Eggs // Pysanky (meaning “to write”) is an ancient egg art with origins in Ukraine and surrounding regions. Each egg is a unique handmade treasure, where beeswax and dyes are used repeatedly in the creation. Once the wax is melted away, the amazing design is revealed. Many pray while writing pysanky — please take a moment to pray for Ukraine as you read this. // These eggs were designed by Davonne Souza — Etsy.com/shop/EggspressionsByDavon ",
        "alt_description": null,
        "urls": {
          "raw": "https://images.unsplash.com/photo-1649976238934-f5802c441a96?ixid=MnwzMTk2NjF8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1",
          "full": "https://images.unsplash.com/photo-1649976238934-f5802c441a96?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=85",
          "regular": "https://images.unsplash.com/photo-1649976238934-f5802c441a96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=1080",
          "small": "https://images.unsplash.com/photo-1649976238934-f5802c441a96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=400",
          "thumb": "https://images.unsplash.com/photo-1649976238934-f5802c441a96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=200",
          "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1649976238934-f5802c441a96"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/hmkkbJR9Br4",
          "html": "https://unsplash.com/photos/hmkkbJR9Br4",
          "download": "https://unsplash.com/photos/hmkkbJR9Br4/download?ixid=MnwzMTk2NjF8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1MDAzODAzMQ",
          "download_location": "https://api.unsplash.com/photos/hmkkbJR9Br4/download?ixid=MnwzMTk2NjF8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1MDAzODAzMQ"
        },
        "categories": [],
        "likes": 2,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {},
        "user": {
          "id": "PvjW2sBV594",
          "updated_at": "2022-04-15T11:49:55-04:00",
          "username": "timmossholder",
          "name": "Tim Mossholder",
          "first_name": "Tim",
          "last_name": "Mossholder",
          "twitter_username": "TimMossholder",
          "portfolio_url": "http://timmossholder.com",
          "bio": "Hello! I’m located on the Central Coast of California, and always on the lookout for something beautiful to capture. Connect on Instagram & Twitter: @timmossholder",
          "location": "Santa Maria",
          "links": {
            "self": "https://api.unsplash.com/users/timmossholder",
            "html": "https://unsplash.com/@timmossholder",
            "photos": "https://api.unsplash.com/users/timmossholder/photos",
            "likes": "https://api.unsplash.com/users/timmossholder/likes",
            "portfolio": "https://api.unsplash.com/users/timmossholder/portfolio",
            "following": "https://api.unsplash.com/users/timmossholder/following",
            "followers": "https://api.unsplash.com/users/timmossholder/followers"
          },
          "profile_image": {
            "small": "https://images.unsplash.com/profile-1474504186457-d0b36ed789fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium": "https://images.unsplash.com/profile-1474504186457-d0b36ed789fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large": "https://images.unsplash.com/profile-1474504186457-d0b36ed789fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "timmossholder",
          "total_collections": 36,
          "total_likes": 4480,
          "total_photos": 1781,
          "accepted_tos": true,
          "for_hire": true,
          "social": {
            "instagram_username": "timmossholder",
            "portfolio_url": "http://timmossholder.com",
            "twitter_username": "TimMossholder",
            "paypal_email": null
          }
        }
      },
      {
        "id": "EcJGVmdrcr0",
        "created_at": "2022-04-14T02:25:34-04:00",
        "updated_at": "2022-04-15T11:24:03-04:00",
        "promoted_at": "2022-04-15T11:24:02-04:00",
        "width": 3510,
        "height": 5265,
        "color": "#8c8c8c",
        "blur_hash": "L23uo}ay00WBxuofM{fQ00ay_3j[",
        "description": "Apple Watch series 6",
        "alt_description": null,
        "urls": {
          "raw": "https://images.unsplash.com/photo-1649917497525-0da20c6e622b?ixid=MnwzMTk2NjF8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1",
          "full": "https://images.unsplash.com/photo-1649917497525-0da20c6e622b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=85",
          "regular": "https://images.unsplash.com/photo-1649917497525-0da20c6e622b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=1080",
          "small": "https://images.unsplash.com/photo-1649917497525-0da20c6e622b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=400",
          "thumb": "https://images.unsplash.com/photo-1649917497525-0da20c6e622b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=200",
          "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1649917497525-0da20c6e622b"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/EcJGVmdrcr0",
          "html": "https://unsplash.com/photos/EcJGVmdrcr0",
          "download": "https://unsplash.com/photos/EcJGVmdrcr0/download?ixid=MnwzMTk2NjF8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDAzODAzMQ",
          "download_location": "https://api.unsplash.com/photos/EcJGVmdrcr0/download?ixid=MnwzMTk2NjF8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDAzODAzMQ"
        },
        "categories": [],
        "likes": 2,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {
          "fashion": {
            "status": "unevaluated"
          },
          "business-work": {
            "status": "unevaluated"
          },
          "wallpapers": {
            "status": "unevaluated"
          }
        },
        "user": {
          "id": "0wFnJJ3lanw",
          "updated_at": "2022-04-15T11:49:53-04:00",
          "username": "klim11",
          "name": "Klim Musalimov",
          "first_name": "Klim",
          "last_name": "Musalimov",
          "twitter_username": "Kllimstewart",
          "portfolio_url": "https://instagram.com/kllimstewart?igshid=40ifc8qy0938",
          "bio": "Photographer",
          "location": null,
          "links": {
            "self": "https://api.unsplash.com/users/klim11",
            "html": "https://unsplash.com/@klim11",
            "photos": "https://api.unsplash.com/users/klim11/photos",
            "likes": "https://api.unsplash.com/users/klim11/likes",
            "portfolio": "https://api.unsplash.com/users/klim11/portfolio",
            "following": "https://api.unsplash.com/users/klim11/following",
            "followers": "https://api.unsplash.com/users/klim11/followers"
          },
          "profile_image": {
            "small": "https://images.unsplash.com/profile-1613505980326-8a76286fc2f4image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium": "https://images.unsplash.com/profile-1613505980326-8a76286fc2f4image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large": "https://images.unsplash.com/profile-1613505980326-8a76286fc2f4image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "Kllimstewart",
          "total_collections": 40,
          "total_likes": 4666,
          "total_photos": 2488,
          "accepted_tos": true,
          "for_hire": false,
          "social": {
            "instagram_username": "Kllimstewart",
            "portfolio_url": "https://instagram.com/kllimstewart?igshid=40ifc8qy0938",
            "twitter_username": "Kllimstewart",
            "paypal_email": null
          }
        }
      },
      {
        "id": "FT1ePvQ1HlE",
        "created_at": "2021-12-07T16:54:06-05:00",
        "updated_at": "2022-04-14T23:24:19-04:00",
        "promoted_at": null,
        "width": 12000,
        "height": 8000,
        "color": "#8c8c26",
        "blur_hash": "LKG*c~W|-9Nz-KRzsFOZPDRQNMS7",
        "description": null,
        "alt_description": "tezos and bitcoin",
        "urls": {
          "raw": "https://images.unsplash.com/photo-1638913976954-8f7b612867c2?ixid=MnwzMTk2NjF8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1",
          "full": "https://images.unsplash.com/photo-1638913976954-8f7b612867c2?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMTk2NjF8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=85",
          "regular": "https://images.unsplash.com/photo-1638913976954-8f7b612867c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=1080",
          "small": "https://images.unsplash.com/photo-1638913976954-8f7b612867c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=400",
          "thumb": "https://images.unsplash.com/photo-1638913976954-8f7b612867c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=200",
          "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1638913976954-8f7b612867c2"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/FT1ePvQ1HlE",
          "html": "https://unsplash.com/photos/FT1ePvQ1HlE",
          "download": "https://unsplash.com/photos/FT1ePvQ1HlE/download?ixid=MnwzMTk2NjF8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1MDAzODAzMQ",
          "download_location": "https://api.unsplash.com/photos/FT1ePvQ1HlE/download?ixid=MnwzMTk2NjF8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1MDAzODAzMQ"
        },
        "categories": [],
        "likes": 191,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": {
          "impression_urls": [
            "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=9606382&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
          ],
          "tagline": "Designed to evolve. Built to empower",
          "tagline_url": "https://tezos.com/?utm_campaign=_evergreen_contextual_reach_gl_&utm_source=&utm_medium=&utm_content=contextual_image_unsplash_v1_T1714",
          "sponsor": {
            "id": "JpoSTNq74MM",
            "updated_at": "2022-04-15T08:39:48-04:00",
            "username": "tezos",
            "name": "Tezos",
            "first_name": "Tezos",
            "last_name": null,
            "twitter_username": "tezos",
            "portfolio_url": "https://tezos.com/",
            "bio": "Tezos is a self-upgradable and energy-efficient Proof of Stake blockchain with a proven record of security and scalability. Tezos seamlessly adopts innovations without disruption. For more information, please visit tezos.com.",
            "location": null,
            "links": {
              "self": "https://api.unsplash.com/users/tezos",
              "html": "https://unsplash.com/@tezos",
              "photos": "https://api.unsplash.com/users/tezos/photos",
              "likes": "https://api.unsplash.com/users/tezos/likes",
              "portfolio": "https://api.unsplash.com/users/tezos/portfolio",
              "following": "https://api.unsplash.com/users/tezos/following",
              "followers": "https://api.unsplash.com/users/tezos/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1634227720022-77e396999fc8image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1634227720022-77e396999fc8image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1634227720022-77e396999fc8image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": null,
            "total_collections": 0,
            "total_likes": 0,
            "total_photos": 108,
            "accepted_tos": true,
            "for_hire": false,
            "social": {
              "instagram_username": null,
              "portfolio_url": "https://tezos.com/",
              "twitter_username": "tezos",
              "paypal_email": null
            }
          }
        },
        "topic_submissions": {
          "blockchain": {
            "status": "approved",
            "approved_on": "2021-12-07T17:02:05-05:00"
          }
        },
        "user": {
          "id": "JpoSTNq74MM",
          "updated_at": "2022-04-15T08:39:48-04:00",
          "username": "tezos",
          "name": "Tezos",
          "first_name": "Tezos",
          "last_name": null,
          "twitter_username": "tezos",
          "portfolio_url": "https://tezos.com/",
          "bio": "Tezos is a self-upgradable and energy-efficient Proof of Stake blockchain with a proven record of security and scalability. Tezos seamlessly adopts innovations without disruption. For more information, please visit tezos.com.",
          "location": null,
          "links": {
            "self": "https://api.unsplash.com/users/tezos",
            "html": "https://unsplash.com/@tezos",
            "photos": "https://api.unsplash.com/users/tezos/photos",
            "likes": "https://api.unsplash.com/users/tezos/likes",
            "portfolio": "https://api.unsplash.com/users/tezos/portfolio",
            "following": "https://api.unsplash.com/users/tezos/following",
            "followers": "https://api.unsplash.com/users/tezos/followers"
          },
          "profile_image": {
            "small": "https://images.unsplash.com/profile-1634227720022-77e396999fc8image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium": "https://images.unsplash.com/profile-1634227720022-77e396999fc8image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large": "https://images.unsplash.com/profile-1634227720022-77e396999fc8image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": null,
          "total_collections": 0,
          "total_likes": 0,
          "total_photos": 108,
          "accepted_tos": true,
          "for_hire": false,
          "social": {
            "instagram_username": null,
            "portfolio_url": "https://tezos.com/",
            "twitter_username": "tezos",
            "paypal_email": null
          }
        }
      },
      {
        "id": "_e9jVYlaIpk",
        "created_at": "2022-04-14T18:58:10-04:00",
        "updated_at": "2022-04-15T11:16:02-04:00",
        "promoted_at": "2022-04-15T11:16:02-04:00",
        "width": 4672,
        "height": 7008,
        "color": "#f3a60c",
        "blur_hash": "LkJP-$0#=Xof]fX9s:s:bdxCNHbH",
        "description": null,
        "alt_description": null,
        "urls": {
          "raw": "https://images.unsplash.com/photo-1649976390492-324d0c60beed?ixid=MnwzMTk2NjF8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1",
          "full": "https://images.unsplash.com/photo-1649976390492-324d0c60beed?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=85",
          "regular": "https://images.unsplash.com/photo-1649976390492-324d0c60beed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=1080",
          "small": "https://images.unsplash.com/photo-1649976390492-324d0c60beed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=400",
          "thumb": "https://images.unsplash.com/photo-1649976390492-324d0c60beed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=200",
          "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1649976390492-324d0c60beed"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/_e9jVYlaIpk",
          "html": "https://unsplash.com/photos/_e9jVYlaIpk",
          "download": "https://unsplash.com/photos/_e9jVYlaIpk/download?ixid=MnwzMTk2NjF8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1MDAzODAzMQ",
          "download_location": "https://api.unsplash.com/photos/_e9jVYlaIpk/download?ixid=MnwzMTk2NjF8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1MDAzODAzMQ"
        },
        "categories": [],
        "likes": 3,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {},
        "user": {
          "id": "g8RmniQWB8E",
          "updated_at": "2022-04-15T11:44:56-04:00",
          "username": "ventiviews",
          "name": "Venti Views",
          "first_name": "Venti",
          "last_name": "Views",
          "twitter_username": null,
          "portfolio_url": "http://ventiviews.com",
          "bio": "Amazing content for amazing people. Cameras of choice are Sony A7 IV, Mavic 3 Pro, and iPhone 13 pro. ",
          "location": "Los Angeles ",
          "links": {
            "self": "https://api.unsplash.com/users/ventiviews",
            "html": "https://unsplash.com/@ventiviews",
            "photos": "https://api.unsplash.com/users/ventiviews/photos",
            "likes": "https://api.unsplash.com/users/ventiviews/likes",
            "portfolio": "https://api.unsplash.com/users/ventiviews/portfolio",
            "following": "https://api.unsplash.com/users/ventiviews/following",
            "followers": "https://api.unsplash.com/users/ventiviews/followers"
          },
          "profile_image": {
            "small": "https://images.unsplash.com/profile-1641266338667-ca70388429d6image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium": "https://images.unsplash.com/profile-1641266338667-ca70388429d6image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large": "https://images.unsplash.com/profile-1641266338667-ca70388429d6image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "ventiviews",
          "total_collections": 16,
          "total_likes": 263,
          "total_photos": 642,
          "accepted_tos": true,
          "for_hire": true,
          "social": {
            "instagram_username": "ventiviews",
            "portfolio_url": "http://ventiviews.com",
            "twitter_username": null,
            "paypal_email": null
          }
        }
      },
      {
        "id": "kpiqUhUSI_E",
        "created_at": "2022-04-15T00:52:23-04:00",
        "updated_at": "2022-04-15T11:30:07-04:00",
        "promoted_at": "2022-04-15T11:08:02-04:00",
        "width": 4024,
        "height": 6048,
        "color": "#737373",
        "blur_hash": "LqI59}R*j]WB~WWBR*a}IoWBM|ay",
        "description": null,
        "alt_description": null,
        "urls": {
          "raw": "https://images.unsplash.com/photo-1649998333765-ea13f590a546?ixid=MnwzMTk2NjF8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1",
          "full": "https://images.unsplash.com/photo-1649998333765-ea13f590a546?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=85",
          "regular": "https://images.unsplash.com/photo-1649998333765-ea13f590a546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=1080",
          "small": "https://images.unsplash.com/photo-1649998333765-ea13f590a546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=400",
          "thumb": "https://images.unsplash.com/photo-1649998333765-ea13f590a546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=200",
          "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1649998333765-ea13f590a546"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/kpiqUhUSI_E",
          "html": "https://unsplash.com/photos/kpiqUhUSI_E",
          "download": "https://unsplash.com/photos/kpiqUhUSI_E/download?ixid=MnwzMTk2NjF8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1MDAzODAzMQ",
          "download_location": "https://api.unsplash.com/photos/kpiqUhUSI_E/download?ixid=MnwzMTk2NjF8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1MDAzODAzMQ"
        },
        "categories": [],
        "likes": 0,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {},
        "user": {
          "id": "fB6w7nPZnq8",
          "updated_at": "2022-04-15T11:39:56-04:00",
          "username": "jayson_hinrichsen",
          "name": "Jayson Hinrichsen",
          "first_name": "Jayson",
          "last_name": "Hinrichsen",
          "twitter_username": "rawereality",
          "portfolio_url": "https://www.instagram.com/rawe.reality/",
          "bio": "I am a Photographer from Sioux City, Iowa. I have been doing photography for about 4 years now. If you have any questions about photography feel free to DM me. \r\nP.S. if you like my work, feel free to send a donation. It’s greatly appreciated 🙏♥️ ",
          "location": "Des Moines, Iowa",
          "links": {
            "self": "https://api.unsplash.com/users/jayson_hinrichsen",
            "html": "https://unsplash.com/@jayson_hinrichsen",
            "photos": "https://api.unsplash.com/users/jayson_hinrichsen/photos",
            "likes": "https://api.unsplash.com/users/jayson_hinrichsen/likes",
            "portfolio": "https://api.unsplash.com/users/jayson_hinrichsen/portfolio",
            "following": "https://api.unsplash.com/users/jayson_hinrichsen/following",
            "followers": "https://api.unsplash.com/users/jayson_hinrichsen/followers"
          },
          "profile_image": {
            "small": "https://images.unsplash.com/profile-1609483876126-c002704cc7bdimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium": "https://images.unsplash.com/profile-1609483876126-c002704cc7bdimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large": "https://images.unsplash.com/profile-1609483876126-c002704cc7bdimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "Rawe.reality",
          "total_collections": 0,
          "total_likes": 12,
          "total_photos": 489,
          "accepted_tos": true,
          "for_hire": true,
          "social": {
            "instagram_username": "Rawe.reality",
            "portfolio_url": "https://www.instagram.com/rawe.reality/",
            "twitter_username": "rawereality",
            "paypal_email": null
          }
        }
      },
      {
        "id": "yzmhjk0nsww",
        "created_at": "2022-04-14T21:34:05-04:00",
        "updated_at": "2022-04-15T11:00:01-04:00",
        "promoted_at": "2022-04-15T11:00:01-04:00",
        "width": 3264,
        "height": 4896,
        "color": "#260c0c",
        "blur_hash": "LUDa[gt79ZV@=foLRjay0eV@%foz",
        "description": "Jhay Cortez concert ",
        "alt_description": null,
        "urls": {
          "raw": "https://images.unsplash.com/photo-1649986444214-d03f25b37699?ixid=MnwzMTk2NjF8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1",
          "full": "https://images.unsplash.com/photo-1649986444214-d03f25b37699?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=85",
          "regular": "https://images.unsplash.com/photo-1649986444214-d03f25b37699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=1080",
          "small": "https://images.unsplash.com/photo-1649986444214-d03f25b37699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=400",
          "thumb": "https://images.unsplash.com/photo-1649986444214-d03f25b37699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=200",
          "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1649986444214-d03f25b37699"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/yzmhjk0nsww",
          "html": "https://unsplash.com/photos/yzmhjk0nsww",
          "download": "https://unsplash.com/photos/yzmhjk0nsww/download?ixid=MnwzMTk2NjF8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1MDAzODAzMQ",
          "download_location": "https://api.unsplash.com/photos/yzmhjk0nsww/download?ixid=MnwzMTk2NjF8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1MDAzODAzMQ"
        },
        "categories": [],
        "likes": 3,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {},
        "user": {
          "id": "_jpDrdI6HiE",
          "updated_at": "2022-04-15T11:29:55-04:00",
          "username": "jjames25",
          "name": "Jeff James",
          "first_name": "Jeff",
          "last_name": "James",
          "twitter_username": null,
          "portfolio_url": "https://www.instagram.com/oru_jhin/",
          "bio": "An analog guy trying to fit into a digital world. \r\n",
          "location": "Houston, Texas",
          "links": {
            "self": "https://api.unsplash.com/users/jjames25",
            "html": "https://unsplash.com/@jjames25",
            "photos": "https://api.unsplash.com/users/jjames25/photos",
            "likes": "https://api.unsplash.com/users/jjames25/likes",
            "portfolio": "https://api.unsplash.com/users/jjames25/portfolio",
            "following": "https://api.unsplash.com/users/jjames25/following",
            "followers": "https://api.unsplash.com/users/jjames25/followers"
          },
          "profile_image": {
            "small": "https://images.unsplash.com/profile-1600108875370-0754156d93c6image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium": "https://images.unsplash.com/profile-1600108875370-0754156d93c6image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large": "https://images.unsplash.com/profile-1600108875370-0754156d93c6image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "oru_jhin ",
          "total_collections": 3,
          "total_likes": 353,
          "total_photos": 155,
          "accepted_tos": true,
          "for_hire": true,
          "social": {
            "instagram_username": "oru_jhin ",
            "portfolio_url": "https://www.instagram.com/oru_jhin/",
            "twitter_username": null,
            "paypal_email": null
          }
        }
      },
      {
        "id": "GudhHWrQLdo",
        "created_at": "2022-04-14T07:23:06-04:00",
        "updated_at": "2022-04-15T10:56:02-04:00",
        "promoted_at": "2022-04-15T10:56:01-04:00",
        "width": 3768,
        "height": 6698,
        "color": "#404040",
        "blur_hash": "LCA^zTS0s:.8MyV@M{V@4WxaR%kC",
        "description": null,
        "alt_description": null,
        "urls": {
          "raw": "https://images.unsplash.com/photo-1649935347546-6ab789891aa7?ixid=MnwzMTk2NjF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTAwMzgwMzE&ixlib=rb-1.2.1",
          "full": "https://images.unsplash.com/photo-1649935347546-6ab789891aa7?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTAwMzgwMzE&ixlib=rb-1.2.1&q=85",
          "regular": "https://images.unsplash.com/photo-1649935347546-6ab789891aa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTAwMzgwMzE&ixlib=rb-1.2.1&q=80&w=1080",
          "small": "https://images.unsplash.com/photo-1649935347546-6ab789891aa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTAwMzgwMzE&ixlib=rb-1.2.1&q=80&w=400",
          "thumb": "https://images.unsplash.com/photo-1649935347546-6ab789891aa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTAwMzgwMzE&ixlib=rb-1.2.1&q=80&w=200",
          "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1649935347546-6ab789891aa7"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/GudhHWrQLdo",
          "html": "https://unsplash.com/photos/GudhHWrQLdo",
          "download": "https://unsplash.com/photos/GudhHWrQLdo/download?ixid=MnwzMTk2NjF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTAwMzgwMzE",
          "download_location": "https://api.unsplash.com/photos/GudhHWrQLdo/download?ixid=MnwzMTk2NjF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTAwMzgwMzE"
        },
        "categories": [],
        "likes": 5,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {},
        "user": {
          "id": "wdlIencKLUU",
          "updated_at": "2022-04-15T11:49:58-04:00",
          "username": "martinkatler",
          "name": "Martin Katler",
          "first_name": "Martin",
          "last_name": "Katler",
          "twitter_username": null,
          "portfolio_url": null,
          "bio": "Automotive photographer from Slovakia. Send a private message if you want to book me.",
          "location": "Slovakia",
          "links": {
            "self": "https://api.unsplash.com/users/martinkatler",
            "html": "https://unsplash.com/@martinkatler",
            "photos": "https://api.unsplash.com/users/martinkatler/photos",
            "likes": "https://api.unsplash.com/users/martinkatler/likes",
            "portfolio": "https://api.unsplash.com/users/martinkatler/portfolio",
            "following": "https://api.unsplash.com/users/martinkatler/following",
            "followers": "https://api.unsplash.com/users/martinkatler/followers"
          },
          "profile_image": {
            "small": "https://images.unsplash.com/profile-1643477772442-3c23cf409bd3image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium": "https://images.unsplash.com/profile-1643477772442-3c23cf409bd3image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large": "https://images.unsplash.com/profile-1643477772442-3c23cf409bd3image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "martin_katler",
          "total_collections": 0,
          "total_likes": 84,
          "total_photos": 575,
          "accepted_tos": true,
          "for_hire": false,
          "social": {
            "instagram_username": "martin_katler",
            "portfolio_url": null,
            "twitter_username": null,
            "paypal_email": null
          }
        }
      }
    ])
  }, [])

  const getPhotos = (seacrh_term) => {
    // Term
    setTerm(seacrh_term)
    // Fetch
    setPhotos([
      {
        "id": "8kqtv6dMNSg",
        "created_at": "2022-03-31T10:33:43-04:00",
        "updated_at": "2022-04-14T23:48:13-04:00",
        "promoted_at": null,
        "width": 8256,
        "height": 5504,
        "color": "#d9d9d9",
        "blur_hash": "LOHxvk4nDix^?vMx00?aNGV[M{%L",
        "description": null,
        "alt_description": null,
        "urls": {
          "raw": "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixid=MnwzMTk2NjF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1",
          "full": "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMTk2NjF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=85",
          "regular": "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=1080",
          "small": "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=400",
          "thumb": "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=200",
          "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1648737154448-ccf0cafae1c2"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/8kqtv6dMNSg",
          "html": "https://unsplash.com/photos/8kqtv6dMNSg",
          "download": "https://unsplash.com/photos/8kqtv6dMNSg/download?ixid=MnwzMTk2NjF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MDAzODAzMQ",
          "download_location": "https://api.unsplash.com/photos/8kqtv6dMNSg/download?ixid=MnwzMTk2NjF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MDAzODAzMQ"
        },
        "categories": [],
        "likes": 58,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": {
          "impression_urls": [
            "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=10307202&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
          ],
          "tagline": "Closer to what you love",
          "tagline_url": "https://www.microsoft.com/windows/?ocid=UnsplashFY22_soc_pmc_win_",
          "sponsor": {
            "id": "kSlnstJTnY8",
            "updated_at": "2022-04-15T11:39:53-04:00",
            "username": "windows",
            "name": "Windows",
            "first_name": "Windows",
            "last_name": null,
            "twitter_username": "windows",
            "portfolio_url": "https://www.windows.com",
            "bio": "Follow us @Windows. #DoGreatThings",
            "location": null,
            "links": {
              "self": "https://api.unsplash.com/users/windows",
              "html": "https://unsplash.com/@windows",
              "photos": "https://api.unsplash.com/users/windows/photos",
              "likes": "https://api.unsplash.com/users/windows/likes",
              "portfolio": "https://api.unsplash.com/users/windows/portfolio",
              "following": "https://api.unsplash.com/users/windows/following",
              "followers": "https://api.unsplash.com/users/windows/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "windows",
            "total_collections": 1,
            "total_likes": 0,
            "total_photos": 168,
            "accepted_tos": true,
            "for_hire": false,
            "social": {
              "instagram_username": "windows",
              "portfolio_url": "https://www.windows.com",
              "twitter_username": "windows",
              "paypal_email": null
            }
          }
        },
        "topic_submissions": {},
        "user": {
          "id": "kSlnstJTnY8",
          "updated_at": "2022-04-15T11:39:53-04:00",
          "username": "windows",
          "name": "Windows",
          "first_name": "Windows",
          "last_name": null,
          "twitter_username": "windows",
          "portfolio_url": "https://www.windows.com",
          "bio": "Follow us @Windows. #DoGreatThings",
          "location": null,
          "links": {
            "self": "https://api.unsplash.com/users/windows",
            "html": "https://unsplash.com/@windows",
            "photos": "https://api.unsplash.com/users/windows/photos",
            "likes": "https://api.unsplash.com/users/windows/likes",
            "portfolio": "https://api.unsplash.com/users/windows/portfolio",
            "following": "https://api.unsplash.com/users/windows/following",
            "followers": "https://api.unsplash.com/users/windows/followers"
          },
          "profile_image": {
            "small": "https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium": "https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large": "https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "windows",
          "total_collections": 1,
          "total_likes": 0,
          "total_photos": 168,
          "accepted_tos": true,
          "for_hire": false,
          "social": {
            "instagram_username": "windows",
            "portfolio_url": "https://www.windows.com",
            "twitter_username": "windows",
            "paypal_email": null
          }
        }
      },
      {
        "id": "rZMe6PJJlko",
        "created_at": "2022-04-14T05:29:26-04:00",
        "updated_at": "2022-04-15T11:48:01-04:00",
        "promoted_at": "2022-04-15T11:48:01-04:00",
        "width": 4024,
        "height": 6048,
        "color": "#262626",
        "blur_hash": "L768%0ibiv.SMwbcW=V@D4oztSMx",
        "description": null,
        "alt_description": null,
        "urls": {
          "raw": "https://images.unsplash.com/photo-1649928367017-a102ec4e3cca?ixid=MnwzMTk2NjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1",
          "full": "https://images.unsplash.com/photo-1649928367017-a102ec4e3cca?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=85",
          "regular": "https://images.unsplash.com/photo-1649928367017-a102ec4e3cca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=1080",
          "small": "https://images.unsplash.com/photo-1649928367017-a102ec4e3cca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=400",
          "thumb": "https://images.unsplash.com/photo-1649928367017-a102ec4e3cca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk2NjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MDAzODAzMQ&ixlib=rb-1.2.1&q=80&w=200",
          "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1649928367017-a102ec4e3cca"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/rZMe6PJJlko",
          "html": "https://unsplash.com/photos/rZMe6PJJlko",
          "download": "https://unsplash.com/photos/rZMe6PJJlko/download?ixid=MnwzMTk2NjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MDAzODAzMQ",
          "download_location": "https://api.unsplash.com/photos/rZMe6PJJlko/download?ixid=MnwzMTk2NjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MDAzODAzMQ"
        },
        "categories": [],
        "likes": 0,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {},
        "user": {
          "id": "yYm1Weig7Ts",
          "updated_at": "2022-04-15T11:49:56-04:00",
          "username": "sxoxm",
          "name": "Sven Mieke",
          "first_name": "Sven",
          "last_name": "Mieke",
          "twitter_username": "sxoxm",
          "portfolio_url": null,
          "bio": null,
          "location": "Erlangen, Bavaria, Germany",
          "links": {
            "self": "https://api.unsplash.com/users/sxoxm",
            "html": "https://unsplash.com/@sxoxm",
            "photos": "https://api.unsplash.com/users/sxoxm/photos",
            "likes": "https://api.unsplash.com/users/sxoxm/likes",
            "portfolio": "https://api.unsplash.com/users/sxoxm/portfolio",
            "following": "https://api.unsplash.com/users/sxoxm/following",
            "followers": "https://api.unsplash.com/users/sxoxm/followers"
          },
          "profile_image": {
            "small": "https://images.unsplash.com/profile-1542358354973-b810bb7c9ba9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium": "https://images.unsplash.com/profile-1542358354973-b810bb7c9ba9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large": "https://images.unsplash.com/profile-1542358354973-b810bb7c9ba9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "sxoxm",
          "total_collections": 1,
          "total_likes": 415,
          "total_photos": 261,
          "accepted_tos": true,
          "for_hire": true,
          "social": {
            "instagram_username": "sxoxm",
            "portfolio_url": null,
            "twitter_username": "sxoxm",
            "paypal_email": null
          }
        }
      },
    ])
  }

  return (
    <div className="App">

      <Container className='_wrapper' maxWidth="md" sx={{ padding: { sm: "20px 40px", } }}>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} term={term} getPhotos={getPhotos} />

        <Divider sx={{ margin: "20px 0" }} />

        <Gallery photos={photos} term={term} />
      </Container>

      <Footer />

    </div>
  );
}

export default App;
