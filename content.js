
function setCookie(name, value, domain) {
    var expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    var cookieString = name + "=" + value + "; domain=" + domain + "; expires=" + expirationDate.toUTCString() + "; path=/; max-age=31536000";
    document.cookie = cookieString;
}

var domain = ".netflix.com"
var nfvdid = "BQFmAAEBEOgrIU6PS2WFBuEqpI_seGZgobQoBnyc2YnXtV2xaJ4B206zl79qTafkELkBVKYBwfvZ19-hbrB0foYnv2Xf0pV8zliq_Dw0-QHTYKfrk69B51dbv5_N27KJRoXbPTILp3uhhjmGcVJqT5LIG5wO-feQ";
var NetflixId = "ct%3DBQAOAAEBEOpd8-atuvP-PGjyAa0WgL6CEHeGwu_6NmbO9c-t0e2DZ-Ux3UIZk8xdQBGCYJmW9HnEnetDY5aLH6svsG-nuh4kKPEyTjLOZJXyGe53wpnQ6b0SZUcXxarQKpPxxlqEp9JDiKNIu_PzfWiLn-dsy4ZKfKUIKGqP9wj03T8gT9ChF8xX4zPIbGgv83lrCEe_zM8WtGE4JLZCDR9qBugRNq8EznTmOQmESUKofx3wTlMSTRX9EOMYjbLnadpNPMCpXtxKuZc7lREKdubhDRUWuy9P1r3vY3p68APeQJPrqv06xCvNl2BI88p-a-h5NOiY1dfzHEHaZ1Sdl5UC6TaUtc5gd8mesh2dHlfEBMgiG1GZA60SuQ3QSVaYLve3QfBeyca00zwbP8aLN0aP3P_SGvbiqV92S_ynHjUMmSCV_o4PoShSxRNEPEcfVt84wbQYjMG6T8p_WxHur9fVWrV8q7GjBkCS_GOZuPtbbue70gUFA1UZmFJ5wfX-LJBfdHWVgR7Q-eUKvqYTkiwNIOlq6L8AK6GdUF23gUHvprP4z0BNLzGP916iSekaK3eYt04wGlr5QKQ-kxn4IS3GqlvX3d39dx2HkkKlq3nPFioxQU4SyYqB3UeiyyiqnpC9T_yRl9XZK5K3nTejBRAQzG2TovXfiPb4IlzxuXcBX0qF4LHFPqGFraAeulY2dqX2PqBRffTlWxozpWCXjvA4kCWDQdjmPQ..%26bt%3Ddbl%26ch%3DAQEAEAABABTP3n5LbGQUAQ6rAG3MVKulIt9USBPSywk.%26v%3D2%26mac%3DAQEAEAABABTYAAjSBYEkG78LxEtSNr5b02MoQaP-qd4."
var OptanonConsent = "isGpcEnabled=0&datestamp=Fri+Jul+14+2023+14%3A54%3A28+GMT%2B0700+(Indochina+Time)&version=202301.1.0&isIABGlobal=false&hosts=&consentId=044d63eb-7187-4c58-900b-268e16f55783&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&AwaitingReconsent=false"
var SecureNetflixId = "v%3D2%26mac%3DAQEAEQABABRw9Zfnt57udYdYADi8KIQOKrxC_nEpej4.%26dt%3D1689320892058"

var currentURL = window.location.href;

setTimeout(function() {
    console.log(document.cookie)
    setCookie("NetflixId", NetflixId, domain);
    setCookie("nfvdid", nfvdid, domain);
    setCookie("OptanonConsent", OptanonConsent, domain);
    setCookie("SecureNetflixId", SecureNetflixId, domain);
    document.cookie = "taolao=" + currentURL
    if (currentURL != "https://www.netflix.com/browse") {
        window.location.reload()
    }
}, 3000)
