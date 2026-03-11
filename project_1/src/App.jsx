import React from 'react'
import Cards from './components/Cards'

const App = () => {
  const data = [
  {
    "photo": "https://randomuser.me/api/portraits/men/1.jpg",
    "name": "Aarav Sharma",
    "username": "aarav_dev",
    "bio": "Frontend developer & UI lover.",
    "points": 1250,
    "friends": 340,
    "joinedAt": "March 2023"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/2.jpg",
    "name": "Diya Patel",
    "username": "diya_design",
    "bio": "Creative designer and photographer.",
    "points": 980,
    "friends": 275,
    "joinedAt": "July 2022"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/3.jpg",
    "name": "Rohan Mehta",
    "username": "rohan_codes",
    "bio": "Full stack developer building cool apps.",
    "points": 1520,
    "friends": 410,
    "joinedAt": "January 2024"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/4.jpg",
    "name": "Ananya Gupta",
    "username": "ananya.art",
    "bio": "Digital artist & illustrator.",
    "points": 870,
    "friends": 198,
    "joinedAt": "May 2023"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/5.jpg",
    "name": "Karan Singh",
    "username": "karan_travels",
    "bio": "Travel blogger exploring the world.",
    "points": 1100,
    "friends": 320,
    "joinedAt": "September 2021"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/6.jpg",
    "name": "Neha Verma",
    "username": "neha_fit",
    "bio": "Fitness coach and healthy lifestyle promoter.",
    "points": 1340,
    "friends": 450,
    "joinedAt": "December 2022"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/7.jpg",
    "name": "Vikram Joshi",
    "username": "vikram_tech",
    "bio": "Tech enthusiast and gadget reviewer.",
    "points": 920,
    "friends": 260,
    "joinedAt": "April 2023"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/8.jpg",
    "name": "Priya Shah",
    "username": "priya_writer",
    "bio": "Story writer and blogger.",
    "points": 760,
    "friends": 180,
    "joinedAt": "August 2024"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/9.jpg",
    "name": "Aditya Rao",
    "username": "aditya_gamer",
    "bio": "Gamer | Streaming daily.",
    "points": 1450,
    "friends": 500,
    "joinedAt": "February 2022"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/10.jpg",
    "name": "Sneha Kulkarni",
    "username": "sneha_music",
    "bio": "Singer and music lover.",
    "points": 890,
    "friends": 210,
    "joinedAt": "June 2023"
  }
];

  return (
    <>
      <section className="flex flex-wrap justify-center">
      {data.map(function (user){
        return <Cards data={user}/>;
      })}
      </section>
    </>
  )
};

export default App
