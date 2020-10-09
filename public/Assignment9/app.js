var list_container = document.getElementById("list")

function add_item(){
    var new_value = document.getElementById("new-item").value
    if(new_value != ""){

        var list = document.createElement("div")
        list.setAttribute("class","list")

        var para = document.createElement("div")
        para.setAttribute("class","para")

        var p = document.createElement("p")
        var pText = document.createTextNode(new_value)
        p.appendChild(pText)

        para.appendChild(p)

        list.appendChild(para)

        list_container.appendChild(list)

        var image = document.createElement("div")
        image.setAttribute("class","image")

        var editImg = document.createElement("img")
        editImg.setAttribute("src","Assets/edit.png")
        editImg.setAttribute("onclick","edit_item(this)")
        image.appendChild(editImg)
        
        var deleteImage = document.createElement("img")
        deleteImage.setAttribute("src","Assets/delete.webp")
        deleteImage.setAttribute("onclick","delete_item(this)")
        image.appendChild(deleteImage)

        list.appendChild(image)

        // var new_element = document.createElement("p")
        // var new_item = document.createTextNode(new_value)
        // new_element.appendChild(new_item)

        // var newBtn = document.createElement("img")
        // // var btnName = document.createTextNode("Delete")
        // // newBtn.appendChild(btnName)
        // newBtn.setAttribute("onclick","delete_item(this)")
        // newBtn.setAttribute("src","delete.png")
        // image.appendChild(newBtn)

        // var editBtn = document.createElement("img")
        // // var editName = document.createTextNode("Edit")
        // // editBtn.appendChild(editName)
        // editBtn.setAttribute("onclick","edit_item(this)")
        // editBtn.setAttribute("src","edit.png")
        // image.appendChild(editBtn) 


        // list.appendChild(new_element)

        document.getElementById("new-item").value = ""
    }
}

function delete_item(e){
    e.parentNode.parentNode.remove()
    // e.parentNode.remove();
}

function edit_item(e){
    var edit_value = prompt("Enter new value",e.parentNode.previousSibling.firstChild.firstChild.nodeValue)
    e.parentNode.previousSibling.firstChild.firstChild.nodeValue = edit_value
}