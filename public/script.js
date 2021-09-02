var roomNumber;
var api;

function chooseRoom(){
    /* var list = document.getElementById("room");
    var selectedValue = list.options[list.selectedIndex].value;
        if (selectedValue == "empty"){
        alert("Please select a card type");
    }else {*/
        selectedValue = prompt("What is your room number?");
        roomNumber = selectedValue;
        document.getElementById("roomSelector").style.display = "none";
        document.getElementById("meet").style.display = "block";
        /* do {
            var passcode = prompt("What is the password for this room?");
            if (passcode !== "room#" + roomNumber) {
                alert("The password seems to be incorrect! Please Retry");
            }
        } while (passcode !== "room#" + roomNumber); */
        startMeet(roomNumber);
    //}
    
}

function startMeet(roomNumber) {
    $(document).ready(function(){
        const domain = 'meet.jit.si';
        const options = {
            roomName: 'hospitalMeetRoom' + roomNumber,
            width: 1280,
            height: 720,
            configOverwrite: { 
                startWithAudioMuted: true,
                startWithVideoMuted :true },
            parentNode: document.querySelector('#meet' + roomNumber)
        };
        api = new JitsiMeetExternalAPI(domain, options);
        
    });
}

function goBack() {
    api.executeCommand('hangup');
    history.go(0);
}


