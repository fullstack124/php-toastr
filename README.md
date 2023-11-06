<h1 align="center">php-toastr Package</h1>

<p align="center">
   <em>A PHP package for displaying beautiful toast notifications</em>
</p>

<p align="center">
  <a href="https://github.com/fullstack124/php-toastr/issues">
    <img src="https://img.shields.io/github/issues/fullstack124/php-toastr" alt="GitHub issues">
  </a>
  <a href="https://github.com/fullstack124/php-toastr/stargazers">
    <img src="https://img.shields.io/github/stars/fullstack124/php-toastr" alt="GitHub stars">
  </a>
  <a href="https://packagist.org/packages/fullstack124/php-toastr">
    <img src="https://img.shields.io/packagist/dt/fullstack124/php-toastr" alt="Total Downloads">
  </a>
  <a href="https://github.com/fullstack124/php-toastr/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/fullstack124/php-toastr" alt="License">
  </a>
</p>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Notification Styles](#notification-styles)
    - [Success](#success)
    - [Dark](#dark)
    - [Danger](#danger)
    - [Warning](#warning)
    - [Info](#info)
    - [Pink](#pink) 
- [Contribution](#contribution)
- [License](#license)

## Installation

You can install this package using Composer, a popular PHP package manager:

```bash
composer require hilalahmad/php-toastr
```

## Basic Usage

To use this package for displaying toast notifications, simply include it in your PHP code:

```bash
use Hilalahmad\PhpToastr\Toastr;

$toastr=new Toastr();
return $toastr->success('Lorem ipsum dolor sit');

```
Or 


```bash
use Hilalahmad\PhpToastr\Toastr;

return Toastr::success('Lorem ipsum dolor sit');

```


## Notification Styles

You can display toast notifications in various styles, including:


Success

```bash
return $toastr->success('Lorem ipsum dolor sit','topLeft');
return $toastr->success('Lorem ipsum dolor sit','topRight');
return $toastr->success('Lorem ipsum dolor sit','bottomLeft');
return $toastr->success('Lorem ipsum dolor sit','bottomRight');
return $toastr->success('Lorem ipsum dolor sit','topCenter');
return $toastr->success('Lorem ipsum dolor sit','bottomCenter');

```
Or 


```bash
return Toastr::success('Lorem ipsum dolor sit','topLeft');
return Toastr::success('Lorem ipsum dolor sit','topRight');
return Toastr::success('Lorem ipsum dolor sit','bottomLeft');
return Toastr::success('Lorem ipsum dolor sit','bottomRight');
return Toastr::success('Lorem ipsum dolor sit','topCenter');
return Toastr::success('Lorem ipsum dolor sit','bottomCenter');

```

Danger

```bash
return $toastr->danger('Lorem ipsum dolor sit','topLeft');
return $toastr->danger('Lorem ipsum dolor sit','topRight');
return $toastr->danger('Lorem ipsum dolor sit','bottomLeft');
return $toastr->danger('Lorem ipsum dolor sit','bottomRight');
return $toastr->danger('Lorem ipsum dolor sit','topCenter');
return $toastr->danger('Lorem ipsum dolor sit','bottomCenter');

```
Or 


```bash
return Toastr::danger('Lorem ipsum dolor sit','topLeft');
return Toastr::danger('Lorem ipsum dolor sit','topRight');
return Toastr::danger('Lorem ipsum dolor sit','bottomLeft');
return Toastr::danger('Lorem ipsum dolor sit','bottomRight');
return Toastr::danger('Lorem ipsum dolor sit','topCenter');
return Toastr::danger('Lorem ipsum dolor sit','bottomCenter');

```

Dark

```bash
return $toastr->dark('Lorem ipsum dolor sit','topLeft');
return $toastr->dark('Lorem ipsum dolor sit','topRight');
return $toastr->dark('Lorem ipsum dolor sit','bottomLeft');
return $toastr->dark('Lorem ipsum dolor sit','bottomRight');
return $toastr->dark('Lorem ipsum dolor sit','topCenter');
return $toastr->dark('Lorem ipsum dolor sit','bottomCenter');

```
Or 


```bash
return Toastr::dark('Lorem ipsum dolor sit','topLeft');
return Toastr::dark('Lorem ipsum dolor sit','topRight');
return Toastr::dark('Lorem ipsum dolor sit','bottomLeft');
return Toastr::dark('Lorem ipsum dolor sit','bottomRight');
return Toastr::dark('Lorem ipsum dolor sit','topCenter');
return Toastr::dark('Lorem ipsum dolor sit','bottomCenter');

```


Warning

```bash
return $toastr->warning('Lorem ipsum dolor sit','topLeft');
return $toastr->warning('Lorem ipsum dolor sit','topRight');
return $toastr->warning('Lorem ipsum dolor sit','bottomLeft');
return $toastr->warning('Lorem ipsum dolor sit','bottomRight');
return $toastr->warning('Lorem ipsum dolor sit','topCenter');
return $toastr->warning('Lorem ipsum dolor sit','bottomCenter');

```
Or 


```bash
return Toastr::warning('Lorem ipsum dolor sit','topLeft');
return Toastr::warning('Lorem ipsum dolor sit','topRight');
return Toastr::warning('Lorem ipsum dolor sit','bottomLeft');
return Toastr::warning('Lorem ipsum dolor sit','bottomRight');
return Toastr::warning('Lorem ipsum dolor sit','topCenter');
return Toastr::warning('Lorem ipsum dolor sit','bottomCenter');

```

Info

```bash
return $toastr->info('Lorem ipsum dolor sit','topLeft');
return $toastr->info('Lorem ipsum dolor sit','topRight');
return $toastr->info('Lorem ipsum dolor sit','bottomLeft');
return $toastr->info('Lorem ipsum dolor sit','bottomRight');
return $toastr->info('Lorem ipsum dolor sit','topCenter');
return $toastr->info('Lorem ipsum dolor sit','bottomCenter');

```
Or 


```bash
return Toastr::info('Lorem ipsum dolor sit','topLeft');
return Toastr::info('Lorem ipsum dolor sit','topRight');
return Toastr::info('Lorem ipsum dolor sit','bottomLeft');
return Toastr::info('Lorem ipsum dolor sit','bottomRight');
return Toastr::info('Lorem ipsum dolor sit','topCenter');
return Toastr::info('Lorem ipsum dolor sit','bottomCenter');

```


Pink

```bash
return $toastr->pink('Lorem ipsum dolor sit','topLeft');
return $toastr->pink('Lorem ipsum dolor sit','topRight');
return $toastr->pink('Lorem ipsum dolor sit','bottomLeft');
return $toastr->pink('Lorem ipsum dolor sit','bottomRight');
return $toastr->pink('Lorem ipsum dolor sit','topCenter');
return $toastr->pink('Lorem ipsum dolor sit','bottomCenter');

```
Or 


```bash
return Toastr::pink('Lorem ipsum dolor sit','topLeft');
return Toastr::pink('Lorem ipsum dolor sit','topRight');
return Toastr::pink('Lorem ipsum dolor sit','bottomLeft');
return Toastr::pink('Lorem ipsum dolor sit','bottomRight');
return Toastr::pink('Lorem ipsum dolor sit','topCenter');
return Toastr::pink('Lorem ipsum dolor sit','bottomCenter');

```


## Contribution

If you'd like to contribute to this package or report issues, please check the  <a href="https://github.com/fullstack124/php-toastr/issues"> Github repo</a> for more details.
 
## License
This package is open-source and is licensed under the MIT License. 
 
