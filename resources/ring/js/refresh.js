var pageLoadTime = new Date().getTime()

function reloadIfSourceChanged() {
    var request = new XMLHttpRequest()
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.responseText == 'true') {
            setTimeout(window.location.reload.bind(window.location), 1000);
//                window.location.reload()
            }
            else {
                setTimeout(reloadIfSourceChanged, 500)
            }
        }
    }
    request.open('GET', '/__source_changed?since=' + pageLoadTime, true)
    request.send()
}

window.onload = reloadIfSourceChanged