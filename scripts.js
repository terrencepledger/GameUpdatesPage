function updatePage(body) {
    let name = body["name"]
    let rating = body["ratings"].find(
        element => element["role"] === "support"
    )["level"]
    document.getElementById("body-header").innerText = rating
}

$(

    function () {

        fetch('https://ow-api.com/v1/stats/pc/us/KJK-1234/profile').then(
            res => {
                res.json().then(
                    body => {
                        updatePage(body)
                    }
                )
            }
        )

    }

)