const products = [
    {
        name: 'Apple',
        category: 'Fruit',
        description: 'A round fruit with a red, green, or yellow skin and a white, crunchy interior.',
        price: 89,
        rating: 5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food0'
    },
    {
        name: 'Banana',
        category: 'Fruit',
        description: 'A long, curved fruit with a yellow skin and sweet, creamy white flesh.',
        price: 71,
        rating: 5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food1'
    },
    {
        name: 'Bread',
        category: 'Bakery',
        description: 'A staple food made from flour, water, and yeast, baked into a loaf.',
        price: 88,
        rating: 5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food2'
    },
    {
        name: 'Broccoli',
        category: 'Vegetable',
        description: 'A green vegetable with a tree-like appearance, known for its high nutrient content.',
        price: 94,
        rating: 4.5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food3'
    },
    {
        name: 'Carrot',
        category: 'Vegetable',
        description: 'A root vegetable with a crunchy texture and a sweet, earthy flavor.',
        price: 82,
        rating: 5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food4'
    },
    {
        name: 'Cheese',
        category: 'Dairy',
        description: 'Г/Ц Блинчики с мясом вес,<br> Россия.',
        price: 91,
        rating: 3.5,
        discount: 50,
        image: 'images/pancake.png'
    },
    {
        name: 'Chicken',
        category: 'Meat',
        description: 'A type of poultry, often used as a source of protein in meals.',
        price: 68,
        rating: 3.5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food6'
    },
    {
        name: 'Chocolate',
        category: 'Dessert',
        description: 'A sweet food made from cacao beans, used in a variety of desserts and confections.',
        price: 61,
        rating: 4.5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food7'
    },
    {
        name: 'Coffee',
        category: 'Dessert',
        description: 'A dark, bitter beverage made from roasted coffee beans, typically used as a pick-me-up.',
        price: 98,
        rating: 5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food8'
    },
    {
        name: 'Egg',
        category: 'Dairy',
        description: 'A oval-shaped reproductive body produced by birds, often used as a source of protein in meals.',
        price: 79,
        rating: 4.5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food9'
    },
    {
        name: 'Fish',
        category: 'Meat',
        description: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное....',
        price: 89,
        rating: 3.5,
        discount: 50,
        image: 'images/image.png'
    },
    {
        name: 'Grapes',
        category: 'Fruit',
        description: 'A small, sweet fruit that grows in clusters, often used in wine-making.',
        price: 61,
        rating: 4,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food11'
    },
    {
        name: 'Hamburger',
        category: 'Fast food',
        description: 'A sandwich made with a patty of ground beef, served on a bun with various toppings.',
        price: 87,
        rating: 5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food12'
    },
    {
        name: 'Hot dog',
        category: 'Fast food',
        description: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан....',
        price: 84,
        rating: 4.5,
        discount: 50,
        image: 'images/image1.png'
    },
    {
        name: 'Ice cream',
        category: 'Dessert',
        description: 'A frozen dessert made from cream, sugar, and flavorings, available in a variety of flavors.',
        price: 68,
        rating: 4.5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food14'
    },
    {
        name: 'Lemon',
        category: 'Fruit',
        description: 'A yellow citrus fruit with a tart, acidic flavor, often used in cooking and baking.',
        price: 74,
        rating: 3.5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food15'
    },
    {
        name: 'Eggs',
        category: 'Dairy',
        description: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро....',
        price: 70,
        rating: 4.5,
        discount: 50,
        image: 'images/image2.png'
    },
    {
        name: 'Honey',
        category: 'Dairy',
        description: 'Honey is a sweet, sticky liquid made by bees from the nectar of flowers.',
        price: 87,
        rating: 4,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food17'
    },
    {
        name: 'Ice Cream',
        category: 'Dessert',
        description: 'Ice cream is a frozen dessert made from cream, sugar, and flavorings.',
        price: 83,
        rating: 4.5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food18'
    },
    {
        name: 'Jelly',
        category: 'Fruit',
        description: 'Jelly is a sweet spread made from fruit juice and sugar, often used as a topping for toast or pastries.',
        price: 76,
        rating: 5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food19'
    },
    {
        name: 'Ketchup',
        category: 'Dairy',
        description: 'Ketchup is a tangy sauce made from tomatoes, vinegar, sugar, and spices.',
        price: 77,
        rating: 5,
        discount: 0,
        image: 'images/image.png'
    },
    {
        name: 'Mango',
        category: 'Fruit',
        description: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12».',
        price: 80,
        rating: 5,
        discount: 20,
        image: 'images/image3.png'
    },
    {
        name: 'Noodles',
        category: 'Meat',
        description: 'Noodles are a type of pasta made from wheat flour and water, often used in Asian cuisine.',
        price: 93,
        rating: 3.5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food22'
    },
    {
        name: 'Oatmeal',
        category: 'Breakfast',
        description: 'Oatmeal is a type of porridge made from oats that is often served for breakfast.',
        price: 94,
        rating: 4.5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food23'
    },
    {
        name: 'Bacon',
        category: 'Breakfast',
        description: 'Bacon is a popular breakfast food made from cured pork belly.',
        price: 71,
        rating: 3.5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food24'
    },
    {
        name: 'Pancakes',
        category: 'Breakfast',
        description: 'Pancakes are a popular breakfast food made from flour, eggs, and milk.',
        price: 63,
        rating: 4,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food25'
    },
    {
        name: 'Waffles',
        category: 'Breakfast',
        description: 'Waffles are a type of breakfast food made from batter cooked in a waffle iron.',
        price: 97,
        rating: 4.5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food26'
    },
    {
        name: 'Fried Rice',
        category: 'Lunch',
        description: 'Fried Rice is a type of rice dish that is stir-fried in a pan with oil and other ingredients.',
        price: 81,
        rating: 4,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food27'
    },
    {
        name: 'Spaghetti',
        category: 'Lunch',
        description: 'Spaghetti is a type of pasta made from wheat flour and water, usually served with sauce.',
        price: 96,
        rating: 4,
        discount: 50,
        image: 'https://picsum.photos/200/300/?food28'
    },
    {
        name: 'Pizza',
        category: 'Lunch',
        description: 'Pizza is a popular dish made from dough, sauce, cheese, and toppings.',
        price: 95,
        rating: 4,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food29'
    },
    {
        name: 'Grilled Cheese',
        category: 'Lunch',
        description: 'A grilled cheese sandwich is a hot sandwich made from cheese and bread.',
        price: 100,
        rating: 5,
        discount: 50,
        image: 'images/image2.png'
    },
    {
        name: 'Steak',
        category: 'Dinner',
        description: 'Steak is a popular dinner dish made from a cut of beef that is usually grilled or pan-fried.',
        price: 63,
        rating: 4.5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food31'
    },
    {
        name: 'Salmon',
        category: 'Dinner',
        description: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12».',
        price: 82,
        rating: 4.5,
        discount: 20,
        image: 'images/image3.png'
    },
    {
        name: 'Chicken Alfredo',
        category: 'Dinner',
        description: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан....',
        price: 94,
        rating: 4,
        discount: 20,
        image: 'images/image2.png'
    },
    {
        name: 'Lasagna',
        category: 'Dinner',
        description: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12».',
        price: 70,
        rating: 5,
        discount: 0,
        image: 'images/bought1.png'
    },
    {
        name: 'Chocolate Chip Cookies',
        category: 'Dessert',
        description: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12».',
        price: 98,
        rating: 3.5,
        discount: 0,
        image: 'images/image.png'
    }
]