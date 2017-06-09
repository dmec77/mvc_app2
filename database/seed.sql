-- mvc_app_recipes < data.sql;
\c mvc_app_recipes;

INSERT INTO recipes (
  recipe_name,
  category,
  main_ingredient,
  keyword,
  dish_img
) VALUES

('Zucchini Hummus', 'Appetizer', 'Zucchini', 'Hummus',  'http://realestate-property.com/wp-content/uploads/2014/02/Hotel-Plaza-New-York.jpg'),

('Pumpkin Pancakes', 'Breakfast', 'Pumpkin', 'Pancakes', 'https://s-media-cache-ak0.pinimg.com/736x/ed/17/68/ed1768a427a33d3c8c0ded1333eda5db--almond-pancakes-paleo-pancakes.jpg'),

('Egg Roll in a Bowl', 'Lunch', 'Chicken', 'Egg Roll', 'http://www.paleorunningmomma.com/wp-content/uploads/2016/08/eggroll-in-a-bowl-whole30.jpg'),

('Fettuccini Alfredo with Chicken', 'Dinner', 'Zucchini', 'Alfredo', 'http://wholesomelicious-8101.kxcdn.com/wp-content/uploads/2017/01/Paleo-Garlic-Chicken-Alfredo-2.jpg'),

('Bacon Brownies', 'Dessert', 'Bacon', 'Brownies', 'http://3.bp.blogspot.com/-92KcZTkEi7w/TxGkH_5bR0I/AAAAAAAAH7M/IgcbGY9syFg/s1600/bacon-bourbon-brownies.jpg'),

('Margarita', 'Cocktails', 'Tequila', 'Margarita', 'http://realestate-property.com/wp-content/uploads/2014/02/Hotel-Plaza-New-York.jpg');

INSERT INTO users
(first_name, last_name, username, email)
VALUES
('Diane', 'Carlton', 'dimargcarl@gmail.com', 'dmec77');
