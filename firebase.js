// Initialize Firebase
var config = {
    apiKey: "AIzaSyCaWdAOET1-ane3rxrz5mqyuMd0Dz8_eRM",
    authDomain: "energy-78f0a.firebaseapp.com",
    databaseURL: "https://energy-78f0a.firebaseio.com",
    projectId: "energy-78f0a",
    storageBucket: "",
    messagingSenderId: "841482428206"
};
firebase.initializeApp(config);

var database = firebase.database();

function writeBlock(wID,time) {
    firebase.database().ref('blocks/').push({
    wID: wID,
    time: time
    });
}
        
var blockRef = firebase.database().ref('blocks/');
blockRef.on('child_added', function(data) {
    var wID = data.val().wID
    var time = data.val().time
    addtoLedger(wID,time);
});

blockRef.once('value').then(function(data){
     var blocks = data.val();
    $.each(blocks,function(){
        addtoLedger(this.wID,this.time);
    });
});


function addtoLedger(wID,time){
    $('.js-ledger').before('<div class="row">'+time+'--Transaction ID: '+wID+'</div>');
}