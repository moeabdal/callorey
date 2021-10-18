const Restaurants = [
    {
        id: 1,
        title: 'Nasty Burger',
        description: 'Home of the nastiest burger in town.',
        deliveryTime: '30mins',
        rating: '5/5',
        image: require('./Components/Restaurant/nasty-burger.jpeg'),
        menu: [
            {
                item: 'Nasty Burger Meal',
                description: 'Double patty with lettuce, caramalized onions, pickles and nasty sawce. Comes with a side of fries and soft drink of your choice',
                price: 'KD 5.000',
                callories: '1000'
        },
        {
            item: 'Chicken Burger Meal',
            description: 'Chicken breast with lettuce, garlic mayo, pickles and nasty sawce. Comes with a side of fries and soft drink of your choice',
            price: 'KD 4.000',
            callories: '870'
        }
    ]
        
},
    {
    id: 2,
        title: 'Kena Burger',
        description: 'Home of the BIG BAWSE burger.',
        deliveryTime: '25mins',
        rating: '5/5',
        image: require('./Components/Restaurant/kena.jpeg'),
        menu: [
            {
            item: 'Kena Burger Meal',
            description: 'Double patty with lettuce, caramalized onions, pickles and bog bawse sawce. Comes with a side of fries and soft drink of your choice',
            price: 'KD 5.000'
        }
    ]
    
    }
]

export default Restaurants