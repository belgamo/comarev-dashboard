# Comarev - Front End

![tests](https://github.com/comarev/comarev-dashboard/actions/workflows/test.yml/badge.svg?branch=main)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This application is a partner management system. Basically, the Comarev admins register the interested companies that want to give a discount on their products/services to the Comarev contributors who are also registered in the system. Then, when the contributor buys something at the company (Comarev partner), they just have to scan a QR Code emitted in our dashboard and the system will return if they are ok with the payment (contribution), or not. If so, the contributor can get a discount.

Please check the [WHO_WE_ARE](WHO_WE_ARE.md) section for more information.

# Welcome Contributors!

Please feel free to contribute! While we welcome all contributions to this app, pull-requests that address outstanding Issues and have appropriate test coverage for them will be strongly prioritized.

Please check the [Contributing](CONTRIBUTING.md) section for more information.

## Roadmap

Check [our board](https://github.com/comarev/comarev-dashboard/projects/2) for more details about what we're building.

- [x] Comarev dashboard MVP

The core of this system is ready and running on production. But there are lot of improvements we can do and we need your help!

## Development

### Getting started

First of all, make sure you have your [backend](https://github.com/comarev/comarev) running.

Clone the project from Github:

```
git@github.com:comarev/comarev-dashboard.git
cd comarev-dashboard
```

Install dependencies:

```
yarn
```

Create a **.env** file by copying the existing one:

```
cp .env.sample .env
```

Set the value of `REACT_APP_BASE_URL` pointing to your backend address and then run:

```
yarn start

```
After application boot, you will see the login screen
and you can sign in using one of the credentials below:

```
  email: admin@example.com
  password: 123456

  email: manager@example.com
  password: 123456

  email: regular@example.com
  password: 123456

```

### E2E Tests

Make sure you have your frontend running.

Set the value of `baseUrl` on `cypress.json` pointing to your frontend address and then run:

```
yarn test:e2e
```

## Application Concepts

### Users

A user can be an `admin`, `manager`, `employee` or a `customer`.

- Admins are the Comarev employees and can control the entire system. They are able to create the other kind of users. To become an admin, the user need the `admin` attribute `true`.
- Managers are the company managers. They can emmit their QR Code and also check if a user is able to get discount. To become a manager, the user needs to be assigned to a company.
- Employees do the same as managers, but they can't invite other employees or manage the company config.
- Customers are the Comarev contributors. They are supposed to pay invoices and get discounts. If the user is neither an admin nor a manager, he's a customer.

### Companies

A company is a comarev partner. They offer discounts to the Comarev contributors.

### Invoices

A invoice is created for a user. When all invoices are paid, the user is able to get a discount. Invoices can only be created and mark as paid by an admin user, but customers can visualize them.

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/mauricio-prl"><img src="https://avatars.githubusercontent.com/u/47258878?v=4?s=100" width="100px;" alt="Mauricio Lima"/><br /><sub><b>Mauricio Lima</b></sub></a><br /><a href="https://github.com/comarev/comarev-dashboard/commits?author=m-pereira" title="Code">💻</a> <a href="https://github.com/comarev/comarev-dashboard/commits?author=m-pereira" title="Documentation">📖</a></td>
      <td align="center"><a href="https://github.com/belgamo"><img src="https://avatars.githubusercontent.com/u/19699724?v=4?s=100" width="100px;" alt="Gabriel Belgamo"/><br /><sub><b>Gabriel Belgamo</b></sub></a><br /><a href="https://github.com/comarev/comarev-dashboard/commits?author=belgamo" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/RenanRSilva"><img src="https://avatars.githubusercontent.com/u/77541655?v=4?s=100" width="100px;" alt="RenanRambul"/><br /><sub><b>RenanRambul</b></sub></a><br /><a href="https://github.com/comarev/comarev-dashboard/commits?author=RenanRSilva" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/joseaugustoaquino"><img src="https://avatars.githubusercontent.com/u/60511182?v=4?s=100" width="100px;" alt="JOSE AUGUSTO DE AQUINO"/><br /><sub><b>JOSE AUGUSTO DE AQUINO</b></sub></a><br /><a href="https://github.com/comarev/comarev-dashboard/commits?author=joseaugustoaquino" title="Code">💻</a></td>
      <td align="center"><a href="https://www.linkedin.com/in/vieira-lucas/"><img src="https://avatars.githubusercontent.com/u/54550926?v=4?s=100" width="100px;" alt="Lucas Vieira"/><br /><sub><b>Lucas Vieira</b></sub></a><br /><a href="https://github.com/comarev/comarev-dashboard/pulls?q=is%3Apr+reviewed-by%3ALukazovic" title="Reviewed Pull Requests">👀</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
