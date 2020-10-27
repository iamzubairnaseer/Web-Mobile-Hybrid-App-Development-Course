let userName = prompt('Write Username','Username')
let userKey = firebase.database().ref().push().key;
let userID = userName+userKey

function send(){
    let msg = document.getElementById('inputMessage')    
    let msgKey = firebase.database().ref('Messages').push().key;
    if(msg.value !== ""){
        let newDate = new Date()
        let msgObject = {
            userid: userID,
            msgKey: msgKey,
            msg: msg.value,
            time: newDate.toLocaleTimeString()
        }

        firebase.database().ref('Messages').child(`newMsg ${msgKey}`).set(msgObject)

        msg.value=""
    }
}

function removeMsg(e){
    e.parentNode.parentNode.childNodes[3].childNodes[0].nodeValue = 'This message was removed'
    e.remove()
    firebase.database().ref('Messages').child(`newMsg ${e.id}`).once('value',data=>{
        // console.log(data.val())
        // firebase.database().ref('Messages').child(`newMsg ${e.id}`).remove()
        let msgObject = data.val()
        
        msgObject.msg = 'This message was removed'
    
        firebase.database().ref('Messages').child(`newMsg ${e.id}`).set(msgObject)
    })

    // firebase.database().ref('Messages').child(`newMsg ${e.id}`).once('value',data=>{
    //     console.log(data.val())
    // })
    // console.log(e.parentNode.previousSibling.previousSibling.childNodes[0].nodeValue)
        // parentNode.childNodes[3].childNodes[0].nodeValue)
}

function update(){
    firebase.database().ref('Messages').on('child_added',data=>{
        let msg = data.val()
        let name = msg.userid.slice(0,msg.userid.indexOf('-'))
        let div = ``
        if(msg.userid === userID){
            div = `
                <div class="outGoing-messages">
                    <p class="userName">${name}</p>
                    <p class="msg">
                        ${msg.msg}
                    </p>
                    <p class="sysTime"><img width="15px" onclick="removeMsg(this)" id="${msg.msgKey}" src="delete.webp" alt="delete">${msg.time}</p>
                </div>
            `
        }else{
            div = `
                <div class="inComing-messages">
                    <p class="userName">${name}</p>
                    <p class="msg">
                        ${msg.msg}
                    </p>
                    <p class="sysTime">${msg.time}</p>
                </div>
            `
        }

        let msgBox = document.getElementById('mBox')
        msgBox.innerHTML += div
    })
}

update()