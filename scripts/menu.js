const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const Dinner = "Dinner"
const Lunch = "Lunch"
const veg = "veg"


const products=[
{
	"category1" : "Normal Dishes",
	"category2" : "Breakfast",
	"category3" : "veg",
	"name" : "Idli + vada combo",
	"description" : "Idli is a type of savoury rice cake, originating from the Indian subcontinent, The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice.",
	"rating" : 3.9,
	"mediaUrl" : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wiyxmeviesaczslplnrq",
},
{
	"category1" : "Normal Dishes",
	"category2" : "Breakfast",
	"category3" : "veg",
	"name" : "Rava Dosa Combo",
	"description" : "Rava dosa is a popular variety of South Indian dosa which are crisp, netted and thin. They are very easy to make and need no grinding or fermentation.",
	"rating" : 4.0 ,
	"mediaUrl" : "https://cdn1.foodviva.com/static-content/food-images/south-indian-recipes/rava-dosa/rava-dosa.jpg",
},
{
	"category1" : "Normal Dishes",
	"category2" : "Breakfast",
	"category3" : "veg",
	"name" : "Pongal Combo",
	"description" : "Pongal is a rich combination of rice, dal, ghee and dry fruits which makes our mouth water. It is a comfort food which can be prepared very easily",
	"rating" : 4.1 ,
	"mediaUrl" : "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/ven-pongal-recipe.jpg",
},
{
	"category1" : "Normal Dishes",
	"category2" : "Breakfast",
	"category3" : "veg",
	"name" : "Poori Combo ( Poori with Masala )",
	"description" : "Poori is a deep-fat fried bread made from unleavened whole-wheat flour that originated in the Indian subcontinent. It is eaten for breakfast or as a snack or light meal. It is usually served with a curry or bhaji",
	"rating" : 4.4 ,
	"mediaUrl" : "data:image/jpeg;base64,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",
},
{
	"category1" : "Normal Dishes",
	"category2" : "Breakfast",
	"category3" : "veg",
	"name" : "Kichadi",
	"description" : "Khichdi is a dish made of rice and lentils. In Indian culture, it is considered one of the first solid foods that babies eat. Khichdi was the inspiration for the Anglo-Indian dish kedgeree.",
	"rating" : 3.5 ,
	"mediaUrl" : "https://images.app.goo.gl/99yEKvjzp3H8hd9m9",
},

{
	"category1" : "Normal Dishes",
	"category2" : Lunch,
	"category3" : veg,
	"name" : "Bisibelabath with poriyal Veg",
	"description" : "Bisibelabath is a spicy, rice-based dish with origins in the state of Karnataka, India. It is said to have originated in the Mysore Palace and from there spread across the state of Karnataka",
	"rating" : 4.2,
	"mediaUrl" : "https://images.app.goo.gl/KJrkUT4y5EKYWJBFA",
},
{
	"category1" : "Normal Dishes",
	"category2" : Lunch,
	"category3" : veg,
	"name" : "Veg Pulao",
	"description" : "Veg pulao is a spicy rice dish prepared by cooking rice with various vegetables and spices. The uniqueness of this recipe lies in use of bay leaf, cinnamon.",
	"rating" : 4.1,
	"mediaUrl" : "https://images.app.goo.gl/AhYYydz96iXc7YGm6",
},{
	"category1" : "Normal Dishes",
	"category2" : Lunch,
	"category3" : "nonveg",
	"name" : "Chicken Fried Rice",
	"description" : "Chicken fried rice is the comfort dish of Chinese food. The dish started as a way to use leftover fried rice that has dried out. The addition of oil and soy sauce and veggies and meat spruce up the rice for a delicious meal.",
	"rating" : 4.5,
	"mediaUrl" : "https://images.app.goo.gl/Q5fz6GLMbJthte1U8",
},{
	"category1" : "Normal Dishes",
	"category2" : Lunch,
	"category3" : veg,
	"name" : "Paneer Fried Rice",
	"description" : "A quick delicious rice dish that goes good in lunch box. The recipe is an extension to the popular veg fried rice with a topping of marinated paneer cubes.",
	"rating" : 4.4,
	"mediaUrl" : "https://images.app.goo.gl/A4y5q8tDS4ACybkn6",
},{
	"category1" : "Normal Dishes",
	"category2" : Lunch,
	"category3" : "nonveg",
	"name" : "Roti + Butter Chicken masala",
	"description" : "Butter chicken curry or murgh makhani is a curry of chicken in a spiced tomato, butter and cream sauce. The curry was made by chance by mixing leftover chicken in a tomato gravy, rich in butter and cream.",
	"rating" : 4.5,
	"mediaUrl" : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.toiimg.com%2Fthumb%2F53205522.cms%3Fimgsize%3D302803%26width%3D800%26height%3D800&imgrefurl=https%3A%2F%2Frecipes.timesofindia.com%2Frecipes%2Fbutter-chicken%2Frs53205522.cms&tbnid=x0erbBFQnpri4M&vet=12ahUKEwiP_eHEsfHtAhXDwHMBHf6ZAHEQMygAegUIARDuAQ..i&docid=gn80RtjETPAjDM&w=800&h=800&q=pics%20of%20butter%20chicken%20masala&ved=2ahUKEwiP_eHEsfHtAhXDwHMBHf6ZAHEQMygAegUIARDuAQ",
},
{
	"category1" : "Normal Dishes",
	"category2" : Lunch,
	"category3" : veg,
	"name" : "Roti + Paneer Butter masala",
	"description" : "Paneer Butter Masala is a slightly sweet creamy dish of paneer, originating from the Indian subcontinent, in which the gravy is prepared usually with butter, tomatoes, cashews or cream. Spices such as red chili powder and garam masala are also used to prepare this gravy.",
	"rating" : 4.6,
	"mediaUrl" : "https://images.app.goo.gl/VCYuB6boXnPZA4HG7",
},

{
	"category1" : "Normal Dishes",
	"category2" : Dinner,
	"category3" : veg,
	"name" : "Puttu",
	"description" : "Puttu means portioned in Malayalam. It is made of steamed cylinders of ground rice layered with coconut shavings, sometimes with a sweet or savory filling on the inside",
	"rating" : 4.4,
	"mediaUrl" : "https://images.app.goo.gl/JkfHGrJiuLEQ5sUM7",
},
{
	"category1" : "Normal Dishes",
	"category2" : Dinner,
	"category3" : veg,
	"name" : "Appam",
	"description" : "Appam is a Nasrani dish of fermented bread made with rice batter and coconut milk. It is a staple diet and a cultural synonym of the Nasranis of Kerala, India. It is eaten most frequently for breakfast or dinner.",
	"rating" : 4.3,
	"mediaUrl" : "https://images.app.goo.gl/E1xV3jNbCgVgjeES6",
},
{
	"category1" : "Normal Dishes",
	"category2" : Dinner,
	"category3" : veg,
	"name" : "Kothu parotta",
	"description" : "Kothu Parotta, a shredded flaky multi-layered Indian flatbread stir-fried with assorted vegetables/egg/chicken/lamb and essential spices. It is an incredibly popular street food in Tamil Nadu and Sri Lanka.",
	"rating" : 4.7,
	"mediaUrl" : "https://images.app.goo.gl/wXhwESuWcr6rjho99",
},
{
	"category1" : "Normal Dishes",
	"category2" : Dinner,
	"category3" : veg,
	"name" : "Idiyappam",
	"description" : "Idiyappam is a rice noodle dish originating from the Indian states of Kerala and Tamil Nadu and as well as from Sri Lanka. It consists of rice flour pressed into noodles, woven into a flat disc-like shape and steamed.",
	"rating" : 4.2,
	"mediaUrl" : "https://images.app.goo.gl/G6LbGmLCDSsdqnuA6",
},
{
	"category1" : "Normal Dishes",
	"category2" : Dinner,
	"category3" : veg,
	"name" : "Adai",
	"description" : "Adai is a stomach filling as it is a multi lentil crepe which is made with a mixture of four healthy dals/ lentils like the chana dal, moong dal, tur dal and urad dal, spiced with dry red chillies and fresh peppercorns.",
	"rating" : 4.1,
	"mediaUrl" : "https://images.app.goo.gl/popsQjcwfWGXK2SG8",
},
{
	"category1" : "Normal Dishes",
	"category2" : Dinner,
	"category3" : veg,
	"name" : "Dosa / Idli",
	"description" : "A dosa is a rice pancake, originating from South India, made from a fermented batter predominantly consisting of lentils and rice. Idli is a type of savoury rice cake, originating from the Indian subcontinent, The cakes are made by steaming a batter",
	"rating" : 3.8,
	"mediaUrl" : "https://images.app.goo.gl/YL6otKxJtuaQJkvZ7",
},
{
	"category1" : "Normal Dishes",
	"category2" : Dinner,
	"category3" : "nonveg",
	"name" : "Roti + Butter chicken /panner butter",
	"description" : "Butter chicken curry or murg makhani is a curry of chicken in a spiced tomato, butter and cream sauce. Paneer Butter Masala is a slightly sweet creamy dish of paneer, in which the gravy is prepared usually with butter, tomatoes, cashews or cream.",
	"rating" : 4.5,
	"mediaUrl" : "#",
},
{
	"category1" : "Normal Dishes",
	"category2" : Dinner,
	"category3" : veg,
	"name" : "Roti + Panner Butter",
	"description" : "Paneer Butter Masala is a slightly sweet creamy dish of paneer, in which the gravy is prepared usually with butter, tomatoes, cashews or cream.",
	"rating" : 4.5,
	"mediaUrl" : "https://images.app.goo.gl/7ETeg8ZRQQ6QLku7A",
},
{
	"category1" : "Exotic Dishes",
	"category2" : "special",
	"category3" : veg,
	"name" : "Pizza",
	"description" : "Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.",
	"rating" : 4.2,
	"mediaUrl" : "https://images.app.goo.gl/8w54hE6E9WtuXhRMA",
},
{
	"category1" : "Exotic Dishes",
	"category2" : "special",
	"category3" : veg,
	"name" : "Hukka Noodles",
	"description" : "Hakka noodles is a Chinese preparation where boiled noodles are stir fried with sauces and vegetables or meats. A hakka noodle is made from unleavened dough( rice or wheat flour) that is cooked in a boiling liquid",
	"rating" : 4.0,
	"mediaUrl" : "https://images.app.goo.gl/6i8mYgmu6JfkCvY68",
},
{
	"category1" : "Exotic Dishes",
	"category2" : "special",
	"category3" : "nonveg",
	"name" : "Burger",
	"description" : "American Dream",
	"rating" : 4.2,
	"mediaUrl" : "https://images.app.goo.gl/X2rTYhSphAV478fXA",
},
{
	"category1" : "Exotic Dishes",
	"category2" : "special",
	"category3" : veg,
	"name" : "Sushi",
	"description" : "Sushi is a traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, often raw, and vegetables.",
	"rating" : 4.0,
	"mediaUrl" : "https://images.app.goo.gl/sHGqgRGRPJM2ay3J7",
},
{
	"category1" : "Exotic Dishes",
	"category2" : "special",
	"category3" : "nonveg",
	"name" : "Lasagna",
	"description" : "Lasagne, or the singular lasagna, is an Italian dish made of stacked layers of thin flat pasta alternating with fillings such as ragù (ground meats and tomato sauce) and other vegetables, cheese (which may include ricotta and parmesan), and seasonings and spices such as garlic, oregano and basil.",
	"rating" : 4.0,
	"mediaUrl" : "https://hips.hearstapps.com/vidthumb/images/180820-bookazine-delish-01280-1536610916.jpg?crop=1.00xw%3A0.846xh%3B0.00160xw%2C0.154xh&resize=480%3A270",
},
{
	"category1" : "Exotic Dishes",
	"category2" : "special",
	"category3" : "nonveg",
	"name" : "Hyderabadi Chicken Biriyani",
	"description" : "Hyderabadi Biryani is characteristically distinct. The aroma, taste, tender meat, the Zaffran, everything gives it a distinguished appearance.",
	"rating" : 4.9,
	"mediaUrl" : "https://images.app.goo.gl/AN1kRZWjQxftN9iZ7",
},
{
	"category1" : "Exotic Dishes",
	"category2" : "special",
	"category3" : "nonveg",
	"name" : "Kebab",
	"description" : "Kebabs are various cooked meat dishes, with their origins in Middle Eastern cuisine.",
	"rating" : 4.0,
	"mediaUrl" : "https://images.app.goo.gl/JXYGJ95coZYkMsVG9",
},
{
	"category1" : "Exotic Dishes",
	"category2" : "special",
	"category3" : "nonveg",
	"name" : "Vindaloo",
	"description" : "Vindaloo or vindalho is an Indian curry dish based on the Portuguese dish carne de vinha d'alhos which is popular in Goa, Vasai, the Konkan, Kerala and other parts of India. It is known globally in its British Indian form as a staple of curry house and Indian restaurant menus, and is often regarded as a fiery, spicy dish. It is usually made with pork, but can be made with beef, mutton, chicken, or tofu.",
	"rating" : 4.3,
	"mediaUrl" : "https://images.app.goo.gl/A78fCdmN5ss3RnvP6",
},
{
	"category1" : "Exotic Dishes",
	"category2" : "special",
	"category3" : "nonveg",
	"name" : "Nethili Fry",
	"description" : "Nethili Fish Fry",
	"rating" : 4.5,
	"mediaUrl" : "https://images.app.goo.gl/eBTVoCiiu4vu2MY97",
}	
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
