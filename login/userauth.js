const cusurl = "http://in2wise-server.iptime.org:10049";
const cusheaders = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    // 'Accept-Encoding': 'gzip, deflate, br',
    // 'Connection': 'keep-alive'
    'Access-Control-Allow-Origin': "http://in2wise-server.iptime.org:16055/",
};


function createUser(email, nickname, pwd){
    const url = cusurl + "/user";
    const header = cusheaders;
    axios.request({
        method: "POST",
        url: url,

        headers: header,
        
        data: {
            'email': email,
            'pwd': pwd,
            'nickName': nickname,
            'grade': "1"
        }
    }).then(response => {
        console.log(response);
    }).catch(e => {
        console.error(e);
    });
}

function updateUser(email, currPwd, newPwd, currNickName, newNickName){
    axios.request({
        method: "PATCH",
        url: cusurl + "/user/" + currNickName,

        headers: cusheaders,
        
        data: {
            'email': email,
            'currentPwd': currPwd,
            'newPwd': newPwd,
            'newNickName': newNickName
        }
    }).then(response => {
        console.log(response); 
    }).catch(e => {
        console.error(e);
    });
}


function getUser(currNickName){
    axios.request({
        method: "GET",
        url: cusurl + "/user/" + currNickName,

        headers: cusheaders,
        
        // data: { }
    }).then(response => {
        console.log(response);
    }).catch(e => {
        console.error(e);
    });
}


function deleteUser(currNickName){
    axios.request({
        method: "DELETE",
        url: cusurl + "/user/" + currNickName,

        headers: cusheaders,
        
        // data: { }
    }).then(response => {
        console.log(response);
    }).catch(e => {
        console.error(e);
    });
}