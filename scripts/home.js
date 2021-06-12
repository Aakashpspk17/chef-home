const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const products=[
{
	"category1" : "Best Dishes Of the Week",
	"name" : "Chicken Biriyani",
	"description" : "Biryani takes time and practice to make but is worth every bit of the effort. It consists of basmati rice flavoured with fragrant spices such as saffron and layered with lamb, chicken, fish, or vegetables and a thick gravy.",
	"rating" : 4.5,
	"mediaUrl" : "https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800"
},

{
	"category1" : "Best Dishes Of the Week",
	"name" : "Mutton Chukka",
	"description" : "Mutton Chukka is a lick smacking Chettinad cuisine. It is a spicy dry preparation of mutton and is strongly flavoured with spices",
	"rating" : 4.6,
	"mediaUrl" : "https://www.spiceindiaonline.com/wp-content/uploads/2018/11/Mutton-Chukka-Varuval-1-500x400.jpg"
},
{
	"category1" : "Best Dishes Of the Week",
	"name" : "Chicken Kothu Parota",
	"description" : "Kothu Parotta is a popular South Indian street food delicacy. For making this, parotta is shredded into bite-size pieces and stir-fried with chicken along with other spices. It tastes delicious with raita",
	"rating" : 4.9,
	"mediaUrl" : "https://www.hungryforever.com/wp-content/uploads/2015/04/Featured-image-10-Chicken-65-Kothu-Parota.jpg"
},
{
	"category1" : "Best Dishes Of the Week",
	"name" : "Masala Dosa",
	"description" : "A dosa is South Indian, fermented crepe made from rice batter and black lentils. Masala Dosa, specifically, is when you stuff it with a lightly cooked filling of potatoes, fried onions and spices.",
	"rating" : 4.4,
	"mediaUrl" : "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/06/masala-dosa-1.jpg"
},
{
	"category1" : "Our Plans",
	"name" : "Just A Meal",
	"description" : "Order befor 6 pm and receive delivery next morning at 6 am.",
	"cost-veg" : "₹150 to ₹250 / 2 people ",	
	"cost-nonveg" : "₹250 to ₹350 / 2 people",	
	"description2" : " includes only one meal and you choose to select it",
	"mediaUrl" : "#",
},
{
	"category1" : "Our Plans",
	"name" : "1 Day Plan",
	"description" : "Order before 6 pm and receive delivery of entire days meals next morning at 6 am.",
	"cost-veg" : "₹300 to ₹450 / 1 person ",
	"cost-nonveg" : "₹350 to ₹500 / 1 person",
	"description2" : "includes meal for a day inclusive of snacks and you choose to select all",
	"mediaUrl" : "#",
},
{
	"category1" : "Our Plans",
	"name" : "Weekly Plan",
	"description" : "Order before 6 pm and receive delivery every morning at 6 am for the next week",
	"cost-veg" : "₹1200 to ₹2000 / 1 person ",
	"cost-nonveg" : "₹1500 to ₹2150 / 1 person",
	"description2" : "includes meal for a week 5 working days inclusive of snacks and you choose to select all",
	"mediaUrl" : "#",
},
{
	"category1" : "Our Plans",
	"name" : "Weekend Plan",
	"description" : "Order before 6 pm on Friday and receive delivery of exotic meals over the weekend",
	"cost-veg" : "₹750 to ₹1150 / 2 people",
	"cost-nonveg" : "₹1200 to ₹1750 / 2 people",
	"description2" : "includes 6 meals for the weekend and you choose to select all ",
	"mediaUrl" : "#",
},
]
const connectionURL = "mongodb+srv://lartum:Lartum@cluster0.qij9g.mongodb.net"
const databaseName = "chef_at_home"

MongoClient.connect(connectionURL, {
    useNewUrlParser:true
    }, (error, client) =>{
    if(error) {
        return console.log('Unable to connect to Database')
    }
    const db = client.db(databaseName);
    
    db.collection('products').insertMany( products, (error, result) =>{
            if(error){
                console.log('Unable to connect to the database ', error)
            }
            console.log(result);
    })
})