window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {

    // openWindow call


    // closeWindow call

    // sendMessages call
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        
        var msg = document.getElementById('bchcode').value;
        var fdate = document.getElementById('date_start').value;
        var ldate = document.getElementById('date_stop').value;
        
        liff.sendMessages([{

            type: 'text',
            text: msg,
            text: fdate,
            text: ldate,
            
          
        }, {
            type: 'sticker',
            packageId: '2',
            stickerId: '144'
        }]).then(function () {
              window.alert("Message sent");
        }).catch(function (error) {
                window.alert("Error sending message: " + error);
        });
    });

    // get access token
   

    // get profile call
   
}
