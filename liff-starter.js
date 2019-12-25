window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {

    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        
        var msg = document.getElementById('bchcode').value;
        var msg1 = document.getElementById('date_start').value;
        var msg2 = document.getElementById('date_stop').value;
        
        liff.sendMessages([{

            type: 'text',
            text: 'ชื่อสาขา :' +' '+ msg 
        },
        {
            type: 'text',
            text: 'วันที่เริ่มต้น :' +' '+ msg1
        },
        {

            type: 'text',
            text: 'วันที่สิ้นสุด :' +' '+ msg2
        }]).then(function () {
              window.alert("Message sent");
        }).catch(function (error) {
                window.alert("Error sending message: " + error);
        });
    });

}
