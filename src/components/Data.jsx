import oval from '../assets/images/oval.svg';
import oval1 from '../assets/images/Oval1.svg';
import oval2 from '../assets/images/oval2.svg';
import oval3 from '../assets/images/Oval3.svg';
import oval4 from '../assets/images/Oval4.svg';
import oval5 from '../assets/images/Oval5.svg';
import oval6 from '../assets/images/Oval6.svg';
import rectangle from "../assets/images/Rectangle.svg";

const Data =  [
    {   id: 1,
        name: "Mark Webber",
        notif: "reacted to your recent post", 
        content:'My first tournament today!',
        messageImg: null,
        messageContent: "dommy text",
        dateStamp: "1m ago",
        userImg: oval6,
        isRead: false,      
    },
    {   id: 2,
        name: "Angela Gray",
        notif: "followed you",
        messageImg: null,
        messageContent: "dommy text",
        dateStamp: "5m ago",
        userImg: oval1,
        isRead: false,       
    },
    {   id: 3,
        name: "Jacob Thompson",
        notif: "has joined your group ", 
        chess:'Chess Club',
        messageImg: null,
        messageContent: "dommy text",
        dateStamp: "1 day ago",
        userImg: oval,
        isRead: false,       
    },
    {   id: 4,
        name: "Rizky Hasanuddin",
        notif: "sent you a private message",
        messageImg: null,
        messageContent: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        dateStamp: "5 days ago",
        userImg: oval2,
        isRead: false,       
    },
    {   id: 5,
        name: "Kimberly Smith",
        notif: "commented on your picture",
        messageImg: rectangle,
        messageContent: "dommy text",
        dateStamp: "1 week ago",
        userImg: oval3,
        isRead: false,
    },
    {   id: 6,
        name: "Nathan Peterson",
        notif: "reacted to your recent post",
        content: "5 end-game strategies to increase your win rate",
        messageImg: null,
        messageContent: "dommy text",
        dateStamp: "2 week ago",
        userImg: oval4,
        isRead: false,       
    },
    {   id: 7,
        name: "Anna Kim",
        notif: "left the group", 
        chess:"Chess Club",
        messageImg: null,
        messageContent: "dommy text",
        dateStamp: "2 weeks ago",
        userImg: oval5,
        isRead: false,       
    },
]

export default Data