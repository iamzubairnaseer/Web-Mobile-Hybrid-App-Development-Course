var list_container = document.getElementById("list")

function addDelete(){
    if(list_container.childNodes.length>1){
        document.getElementById("deleteAll").style.display = "flex"
    }else{
        document.getElementById("deleteAll").style.display = "none"
    }
}

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

        document.getElementById("new-item").value = ""

        addDelete()
    }
}

function delete_item(e){
    e.parentNode.parentNode.remove()
    // e.parentNode.remove();
    addDelete()
}

function edit_item(e){
    var edit_value = prompt("Enter new value",e.parentNode.previousSibling.firstChild.firstChild.nodeValue)
    e.parentNode.previousSibling.firstChild.firstChild.nodeValue = edit_value
}

function deleteAll(){
    list_container.innerHTML = ""
    document.getElementById("deleteAll").style.display = "none"        
}