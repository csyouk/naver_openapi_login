function getQueryParams(qs) {
    var token = qs.split('#');
    qs = token[1].split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

var loggingUserProfile = function() {
  document.getElementById("user-info").innerHTML = "콘솔 창을 확인해 주세요. / Check your console.";
  console.log("============================");
  console.log(inner_profileParams);
  console.log("============================");
}

var result = getQueryParams(document.location.href);

var naver_id_login = new naver_id_login();
naver_id_login.get_naver_userprofile(loggingUserProfile);
