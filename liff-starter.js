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
        liff.sendMessages([{

            type: 'text',
            var a = document.getElementById('name').value
          
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

