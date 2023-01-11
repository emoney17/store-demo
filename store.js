if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    for(var i=0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
}

function removeCartItem(event){
    var buttonClicked = event.target 
    // event target is the button we just clicked
    buttonClicked.parentElement.parentElement.remove()
    // parent of parent means div of whole row so we can delete
    updateCartTotal()
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0] // gets first element
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for(var i=0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElemenet = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        
        var price = parseFloat(priceElemenet.innerText.replace('$', '')) //gets text in element and remove $
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total //sets the total to the calculated num
}