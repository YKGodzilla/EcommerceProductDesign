var cart = 0;

$("#cartX").on("click",function(){
    cart++;
    $("#count").html(cart);
    alert("Item added to cart");
});

$("#purchase").on("click",function(){
    alert("Gateway under maintenance, sorry for inconvenience.");
});