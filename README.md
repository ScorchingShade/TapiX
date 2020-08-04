<h1 align="center">Welcome to TapiX 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/ankushors789" target="_blank">
    <img alt="Twitter: ankushors789" src="https://img.shields.io/twitter/follow/ankushors789.svg?style=social" />
  </a>
</p>

> A powerful Invoicing API with NodeJS goodness

## Description  
TAPI API or "The Asynchronous Point Integrator" API is a web-based Vert.x API aimed at providing receipting solutions. It uses MongoDB cloud cluster to create seamless db connectivity experience.
TAPI API uses vert.x technology coupled with spring boot architecture to give you fast, scalable, concurrent and reliable experience.


## Install

```sh
npm install
```


---

## “/stores/fetchAll” API call: 
`A get call to fetch all data in mongoDB collection. 
`

---


---

## “/stores/fetchData/:id” API call: 
`The data needs to be sent in post-call.
The format for the post data needs to be as:
{
  "id": [
    "a1",
    "a2"
  ]
}`

---

## “/stores/deleteData/:id” API call: 
`The data needs to be sent in post-call. 
The format for the post data needs to be as:
{
  "id": [
    "a1",
    "a2"
  ]
}`

---


## “/stores/generate” API call:
`The generate API is configured to send the data in a post-call to the TAPI API service.
The API service is currently modelled on a receipt generating template. The essential parameters are:
`


ReceiptModel


Parameters     | Value type
-------- | -----
id| Receipt Id
name| Payer name
address| Payer address
amount| Receipt Amount
payment_type| Cash/Credit/Debit
date| Receipt date
receiver| Payee Name


## Author

👤 **Ankush**

* Website: https://scorchingshade.github.io/
* Twitter: [@ankushors789](https://twitter.com/ankushors789)
* Github: [@ScorchingShade](https://github.com/ScorchingShade)
* LinkedIn: [@ankush-sharma-a9b24a37](https://linkedin.com/in/ankush-sharma-a9b24a37)

## Show your support

Give a ⭐️ if this project helped you!

