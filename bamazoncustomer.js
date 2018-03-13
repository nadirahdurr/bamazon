var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');


var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazon'
});

connection.connect(function(err){
    if (err) throw err;
    displayItems();
});


function displayItems() {
    connection.query('SELECT * FROM products', function (error, results){
        products = results;
        if (error) throw error;
        var table = new Table({
            head: ['Item ID', 'Product Name', 'Department', 'Price', 'Quantity' ], 
            colWidths: [15, 90, 30, 20, 30],
            chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔', 'top-right': '╗',   'bottom': '═' , 'bottom-mid': '╧' ,
            'bottom-left': '╚' , 'bottom-right': '╝',   'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
            , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
          });
        products.forEach(element => {
            table.push([
              element.item_id, 
              element.product_name,
              element.department_name,
              element.price,
              element.stock_quanity
            ]);
          });
          console.log(table.toString());
          questions() 
    });
};

function questions() {
  inquirer.prompt([
      {
        name: "item_id",
        type: "input",
        message: "What is the ID of the item you want to buy? [end]" 
      },	
      {
        name: "stock_quanity",
        type: "input",
        message: "How many do you want to buy? [end]"
      }

    ]).then(function(answer){
     
    var userinputA = (answer.item_id).toLowerCase()
      
    var userinputB = (answer.stock_quanity).toLowerCase()
      
      if (userinputA === "end" || userinputB === "end") {
      console.log ("Goodbye :)")
      
        questions ()
      }
      else {
        findItem(answer)
        } 
    })
 };

function findItem(answer){
  products.forEach(item => {
  
      if (parseInt(item.item_id) === parseInt(answer.item_id)){

      processOrder(item, answer)
      }
    
    });
};

function processOrder(item, answer){

if (parseInt(item.stock_quanity) >= parseInt(answer.quanity)){
  var newQuantity = parseInt(item.stock_quanity) - parseInt(answer.stock_quanity)
  connection.query('UPDATE products SET ? WHERE ?', [{stock_quanity: newQuantity}, {item_id: item.item_id}])
    console.log('Total Cost = ' + parseInt(item.price) * parseInt(answer.stock_quanity))

  inquirer.prompt([
    {
      name: "buy_again",
      type: "confirm",
      message: "Would you like to buy another item?"	
    }	
      
    ]).then(function(answer){
    // console.log(answer)
      if (answer.buy_again) {
      questions() 
      }
      else {
      console.log("Thanks for shopping at BAMazon!") 
      }
      })

    } else {
      console.log("Insufficient Quantity!");
    
      questions() 
    }
  };
  
module.exports = {
displayItems
}
