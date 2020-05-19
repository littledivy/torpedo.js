[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

![torpedo.js](https://github.com/divy-work/torpedo.js/workflows/torpedo.js/badge.svg)


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/DivySrivastava/torpedo.js">
    <img src="docs/img/torpedo.png" alt="Logo">
  </a>

  <h3 align="center">Torpedo.js</h3>

  <p align="center">
    An amazing utiliy module for building web-apps easilly.
    <br />
    <a href="https://github.com/DivySrivastava/torpedo.js"><strong>Explore the docs</strong></a>
    <br />
    <br />
    <a href="https://torpedo.js.org">View Demo </a> |
    <a href="https://github.com/DivySrivastava/torpedo.js/issues">Report Bug</a> |
    <a href="https://github.com/DivySrivastava/torpedo.js/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Getting Started](#getting-started)
  * [Usage](#usage)
  * [Installation](#installation)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)


<!-- GETTING STARTED -->
## Getting Started

<!-- USAGE EXAMPLES -->
## Usage

```javascript
import Torpedo from '@divy-work/torpedo.js';

const { get } = new Torpedo({
  name: 'Torpedo app',
  port: 5000
});

get('/').send('Hello, World!');
```

_For more examples, please refer to the [Documentation](https://torpedo.js.org)_

### Installation

```sh
yarn add @divy-work/torpedo.js
# using npm? npm i --save @divy-work/torpedo.js
```
<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/DivySrivastava/torpedo.js/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License


\(The MIT License\)

Copyright \(c\) 2020 Divy Srivastava [dj.srivastava23@gmail.com](mailto:dj.srivastava23@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files \(the 'Software'\), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



<!-- CONTACT -->
## Contact

Divy Srivastava - [@undefined_void](https://twitter.com/@undefined_void) - dj.srivastava23@gmail.com

Project Link: [https://github.com/DivySrivastava/torpedo.js](https://github.com/DivySrivastava/torpedo.js)


[contributors-shield]: https://img.shields.io/github/contributors/divy-work/torpedo.js?style=flat-square
[contributors-url]: https://github.com/divy-work/torpedo.js/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/divy-work/torpedo.js?style=flat-square
[forks-url]: https://github.com/divy-work/torpedo.js/network/members
[stars-shield]: https://img.shields.io/github/stars/divy-work/torpedo.js?style=flat-square
[stars-url]: https://github.com/torpedo.js/torpedo.js/stargazers
[issues-shield]: https://img.shields.io/github/issues/divy-work/torpedo.js?style=flat-square
[issues-url]: https://github.com/divy-work/torpedo.js/issues
[license-shield]: https://img.shields.io/github/license/divy-work/torpedo.js?style=flat-square
[license-url]: https://github.com/divy-work/torpedo.js/blob/master/LICENSE.txt
[product-screenshot]: docs/img/screenshot.png
