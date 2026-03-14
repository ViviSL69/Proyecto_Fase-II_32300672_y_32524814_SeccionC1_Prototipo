const productos =[
    {
        id: 1,
        nombre: "Café Negro",
        precio: 1.00,
        imagen: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xAA5EAABAwMCBAQEBQEIAwAAAAABAAIDBAUREiEGMUFREyJhcRQyQpEHUmKBodEVJDNjscHw8SNDU//EABkBAQADAQEAAAAAAAAAAAAAAAABAwQFAv/EACYRAQACAgEEAQMFAAAAAAAAAAABAgMRBBIhMUETBVFSFCIyYZH/2gAMAwEAAhEDEQA/AO4oiICIiAiIgIi+IPqL5lfC8DmQPcoPSLC6phb80rB7uCNq6dxw2aMn0cFHVH3TqfszIvIcDyIPsvuVKH1ERAREQEREBERAREQEREBEWhd7nTWmjfVVcmljR91EzERuUxEzOobU00cEbpJntYxvNzjhUniD8TLVbXOio/71MPynYLn3E3Elw4iqnB73spycRwRnAA7u7la9vskTm6qhmc74K52bm68Oji4P5JOt/ELiO6Eto2CnYc40jf7qLkPEFU5rqmtqXazgjxD5ffdT1Jb5H4ZSwOdp5aRstmW0XCnic+WCTTzJ7fZc+/Ivbu3VxY69uyuR2yfLTJOSeeScrdhp54Tlsw9wN1tsgkeD4YJwMlXLge10stK+pmjEkurTh30rxirbNeKxKc2SuKnVKsUtxutGGyMlc9mrSSHHy+6tVq4onfpZMQ52OR7KXlsNDUTSSTwtMbsYYNgPUrn148Kius8dC/MTXYac5x3Wi9c3G1O2as4uTuIju6dS3OKcDUC0rfaQRkEEei5Xar26FwErjjA3BVxtl0Li1zXB0bui2YOdFu1mTNxJp4WRFjhkbKwOYdisi6MTtiEREBERAREQEREHwrj/AOJt7kqrqaKJxMNN9P5nLsDvlK4JxQ0ji6rZNqBNRhv+yycyZ6YiGzhVibzM+iz0YELZXDL3AHdXaxWJszY6ipZlrvkj7+6gbWNbmB+kEHcDOMLqFLHHHTscAMbNyOgXJwY/myTM+m/k5Zx1iI9o2o00jGRRMb4j9msaMAKOvdRW0cbWNaAx7cOcQpWTEXEDXz40EeUnkpipp4qmJ0czA5jhuFpjjzl6oidaY/m+OazMbQvDNrpmW+Ofw2vklHmcQszoYbTcDNENEMzHF8Y5ZHIhY7OyS3XKW3lxdTlniRE/T6KVl8Brtc5ZqAwMnktGKlfjj1MKsl5+SfcSrNwN/vAc2mjNJTHkHHDiPVVa7WeS2gGoc0ucdsHmuiT3qihB0yGV3RsQLiVAvbUXO4/EVNK1sYGmKKTck9ysnKx0mN9W5aePltX1qFEwQdzt67KWs1fon8F0nl2yA7BC3eIbfCKT4qGNkT2P0vDRsVXWEjzOyMjDnDYhYddMujExkq6fb6wsmZ5sxSAke/8A0rCN1SbS/wAShgLTnD2jnn0KuFIdVPETzLQu3wck2rMT6cTk0itmZERbmYREQEREBeJHtjaXOIAC+yODGlx2woSsqXTuOPl7KNjZfcXPqWMZszUAT3VD/Eqxvp7jFeKdmYpMMm2+U9CVa2bOB9VNywxVtKYp2B8b24c0jmqsuP5K6W4ck47dTk1HJiNj8jYZPQ5V1sN6hqYG007wHY2PQ+qgrzwvU2iUy0jTPRHfbd0fuOoUR4kFJBlgLGtPKNpPM9h7riTF+Pd1v2Z6ah0ypgjnj0VDctHyyjmF5t8k8E5pKl2sBuY389QVf4ZuU5lZTyZfE4bE8wp58kDMGadkYGRkvxt2W3HlrbV47SwZMdqbrPdknbD8S+WacMcWhuzsOA7LEI7TnPhse7u4aifujKyhjGI6mnaPTC8yXKjaMuuLAPTCt66/08RWzZDow3FNTBvrp0ha7ntZI4g65yMbfSo2qvlqYN5pZyOgUHcuJ5ZWGGhiEEZ21DcrPlz0j3/i7Hx72nw+cVVcbY2UcRBOdcm/2Vejp3TPZhzgAc4HVZGRSSygYdI5zvMeePdWe12UMDZJxuw535N91g1bJbtDo7rhpqW/b4vh6ZjTtpbrd79ArZSgNp4m55MAVB4ivNPQ0paHgNzuSd3uXngi5V1a6aWWqldTRMwQXbZ6LucbF8VNT5cXPk67bdGRQfx80UYfrDvRy3LddIa1xj+WZvNvcdwtSlIIiICIvjjgZQRt0nJIjafdRw3XuofrncfVGNUAxilqV3/iblaMTclbkTdI9EGdxGD6qDuFit9W50jWmCV3NzOR/ZTBcsMhyvNqVtGpeq2mviVYNmrqJr/gponl31DZ38qGq7VcfiDNL4xbpx4RZkE98q5zDGcLQmmljzoe4fusd+Bjnx2aacy9fMKe2lqHYd4Za0j5XNw4H1Xo0E5yWsOroOSn57pWNziTf1AKjpr5cmnyzhvswKifpkfku/Xz9mtDZ6mfZkZO+OS228OBmHV74Yo2EFhc/SQcKNqLtc5sh9dUYPQHAWoyMyP1yEvd3cclWU+nUjzLzbnXnwsza210R00jDUyDbU3Zv3XmSunnjLpXNa0cmMHlCjKaLGFsVTtMTW9XHC2Uw0x/xhkvktfzKscW0xrq6npi4iNjA8gHqRsrbw5wXWUdIxxrvhtYDvC3J/f1U5QWi2yujqZqdklSzHmOdsclNF6s08Sq9yorjQROIlZPH3aN/wBwtO0XQOmZjyzwPy5qt1UPFpns64291R6um0Xunki+YvMbgFKHT2ODmNcORGQvq8Qs8OGNn5WgL2pBeX/KV6XwoKtUkipdg7grZhOpufuvtwibHUvLhtzysUDgyTA3B5KBIwjK3o27YK0qfcBbzCgwStLDy26LVe8HkvFz4jsdvm+Hr7pSQzYyY3yjU0dyOg25rQjrYpHuEUscjTux7JA5rmnkQRzUbTqW1K7IWhPgrM+UEbFa5OrKlCMqWBRs8OSpidmVpPhyeSCMMG6yRxALc+HHZexEAiWFmWjyqLvFzioJoQ9wdIfNpIUpPI1nlbu49FCzWqOpnfPVuD5XH7DsvOxng43qISSyOMOcMHms7eO6txx4Wo/pwP8AZRotNCHBvhjdWSThu1W2mdNUTShjegxuewCdxpM4huNWwt8IQh3OQkkj2ydlYeFbeKyrbVyf4dN8g7uPVYbGy01EBmp4TmN2D4pyW+uOSl+CyZKWomxtLIXD2yVMIWRERegREQaNzpviIMjmP5CinwAbs2PZWIjIWhVU25fH+4QRstb8LQT1GkOfDG5+k9cBcdu/F/E3xbZ5brNHDI4GMR4a2F/RpHVp9V1q4kNhe1zc68scB9QIK4jxvbr1QU76ZkTJqV3Kdoy4t7OHf1Vdt77Lsc1iJ2h7hehV1ckl4DzO5xd8TG3DgSd8hZOE77PT8QU9NQSSmGWTQ/B0jQebscgRz7FR1I6SGmklna+Z1S0MfH4ezQDtknrsvD5ZWMHhRR0wx05/xyXncQumJtDt0V+ZBUCnrKmM6tmSkaQ/+inqd7XsyHAk9lzXgCSnuNm0XMiY6yweIM6wOv8AzsrYOGA0a7Tcqqi/Q12pn2KsiWSY1KwOjzzWF0QVemtfFkQIgvVPIO8kGCo2ptnFk2RPfGxt/wAmPBTYtFZU01HEZJ5WRtHMvdhV2o4mhqiWW1pkaOcxBDf27qKHCY1+LXzz10mec7y4D2BW+Lf4YwyMAdAByQYTVPLtT3klZPiy4buQ0LyvraBygKeTxJ2guw3Iz6K0R054jn8efW2hiOmJgODIepPooq02Q1T3STu8Olj/AMSQ/wCg9SrpQz0wo5HRwuhip9g0jBIxtt6qYQrM8DbVLXU1HlonZGyNmc6XOzn7AZV44doxR2qGPGCRn+ir1qoHXK6uqJm+XVrd+kdvfkPZXNowMKR9REUgiIgL4RlfUQR9fb4qmItPlJ5HsVWqu3TU7THVQiSI/UNwroQDzXh0Y3xuOxQcd4s4JbdqXXaKjwJAQ4xfQ8jkfQqjN/Dm/umxUMBaOeHL9D1tsp5DqMTo3Y+aNaJt9QzHg1DHg9HbFeemHv5La057w9wdWQRRCbEbW4wGroFJSeDGGHfA6raYyVjQHRjPXCyA/pSIeJnbA6FuOS1pKVp+lSOy8nCkQstG09MLA6gHZTpa3qF58LPys+6CB/s4Z5LYhtUYIMxIH5W8ypKV0MDS6eWOMDuVqx1/xL9FspZKh3/0xho/dBnLQwAhrWMZ8u2zf27+q8xwy3KRscAIgYd5Hf6nuVt0lkmmIkukocekUZ2HuVORRMiYGRtDWjkB0UjHRUsdJAIohsNyTzJ7lZ0RAREQEREBERAREQFikgikPmYD6rKiDTfQN/8AXLIz+QsJoKkfLUNd7tUkiCHfR3AfI6A+4WM0d16Gm/lTiIK//Zt4fsaunjH6WEr4OHaiU/3u6Tv9I2hqsKIIem4ctkB1Gn8V/wCaY6ipaNjWNDWNDWjkAMBekQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z"

    },
     {
        id: 2,
        nombre: "Empanada de Queso",
        precio: 2.50,
        imagen: "./imagenes/empanada.png"

    },
     {
        id: 3,
        nombre: "Jugo Yuky-Pak",
        precio: 3.00,
        imagen: "./imagenes/yukipak.png"

    },
     {
        id: 4,
        nombre: "Sandwich",
        precio: 4.50,
        imagen: "./imagenes/sandwich.png"

    },
     {
        id: 5,
        nombre: "Brownie",
        precio: 1.00,
        imagen: "./imagenes/brownie.png"

    },
     {
        id: 6,
        nombre: "Coca-Cola",
        precio: 3.00,
        imagen: "./imagenes/cocacola.png"

    }, 
    
]
