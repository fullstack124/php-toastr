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
$toastr->success('Lorem ipsum dolor sit');

```
Or 


```bash
use Hilalahmad\PhpToastr\Toastr;

Toastr::success('Lorem ipsum dolor sit');

```


## Notification Styles

You can display toast notifications in various styles, including:


### Success

```bash
$toastr->success('Lorem ipsum dolor sit','topLeft');
$toastr->success('Lorem ipsum dolor sit','topRight');
$toastr->success('Lorem ipsum dolor sit','bottomLeft');
$toastr->success('Lorem ipsum dolor sit','bottomRight');
$toastr->success('Lorem ipsum dolor sit','topCenter');
$toastr->success('Lorem ipsum dolor sit','bottomCenter');

```
Or 


```bash
Toastr::success('Lorem ipsum dolor sit','topLeft');
Toastr::success('Lorem ipsum dolor sit','topRight');
Toastr::success('Lorem ipsum dolor sit','bottomLeft');
Toastr::success('Lorem ipsum dolor sit','bottomRight');
Toastr::success('Lorem ipsum dolor sit','topCenter');
Toastr::success('Lorem ipsum dolor sit','bottomCenter');

```

### Danger

```bash
$toastr->danger('Lorem ipsum dolor sit','topLeft');
$toastr->danger('Lorem ipsum dolor sit','topRight');
$toastr->danger('Lorem ipsum dolor sit','bottomLeft');
$toastr->danger('Lorem ipsum dolor sit','bottomRight');
$toastr->danger('Lorem ipsum dolor sit','topCenter');
$toastr->danger('Lorem ipsum dolor sit','bottomCenter');

```
Or 


```bash
Toastr::danger('Lorem ipsum dolor sit','topLeft');
Toastr::danger('Lorem ipsum dolor sit','topRight');
Toastr::danger('Lorem ipsum dolor sit','bottomLeft');
Toastr::danger('Lorem ipsum dolor sit','bottomRight');
Toastr::danger('Lorem ipsum dolor sit','topCenter');
Toastr::danger('Lorem ipsum dolor sit','bottomCenter');

```

### Dark

```bash
$toastr->dark('Lorem ipsum dolor sit','topLeft');
$toastr->dark('Lorem ipsum dolor sit','topRight');
$toastr->dark('Lorem ipsum dolor sit','bottomLeft');
$toastr->dark('Lorem ipsum dolor sit','bottomRight');
$toastr->dark('Lorem ipsum dolor sit','topCenter');
$toastr->dark('Lorem ipsum dolor sit','bottomCenter');

```
Or 


```bash
Toastr::dark('Lorem ipsum dolor sit','topLeft');
Toastr::dark('Lorem ipsum dolor sit','topRight');
Toastr::dark('Lorem ipsum dolor sit','bottomLeft');
Toastr::dark('Lorem ipsum dolor sit','bottomRight');
Toastr::dark('Lorem ipsum dolor sit','topCenter');
Toastr::dark('Lorem ipsum dolor sit','bottomCenter');

```


### Warning

```bash
$toastr->warning('Lorem ipsum dolor sit','topLeft');
$toastr->warning('Lorem ipsum dolor sit','topRight');
$toastr->warning('Lorem ipsum dolor sit','bottomLeft');
$toastr->warning('Lorem ipsum dolor sit','bottomRight');
$toastr->warning('Lorem ipsum dolor sit','topCenter');
$toastr->warning('Lorem ipsum dolor sit','bottomCenter');

```
Or 


```bash
Toastr::warning('Lorem ipsum dolor sit','topLeft');
Toastr::warning('Lorem ipsum dolor sit','topRight');
Toastr::warning('Lorem ipsum dolor sit','bottomLeft');
Toastr::warning('Lorem ipsum dolor sit','bottomRight');
Toastr::warning('Lorem ipsum dolor sit','topCenter');
Toastr::warning('Lorem ipsum dolor sit','bottomCenter');

```

### Info

```bash
$toastr->info('Lorem ipsum dolor sit','topLeft');
$toastr->info('Lorem ipsum dolor sit','topRight');
$toastr->info('Lorem ipsum dolor sit','bottomLeft');
$toastr->info('Lorem ipsum dolor sit','bottomRight');
$toastr->info('Lorem ipsum dolor sit','topCenter');
$toastr->info('Lorem ipsum dolor sit','bottomCenter');

```
Or 


```bash
Toastr::info('Lorem ipsum dolor sit','topLeft');
Toastr::info('Lorem ipsum dolor sit','topRight');
Toastr::info('Lorem ipsum dolor sit','bottomLeft');
Toastr::info('Lorem ipsum dolor sit','bottomRight');
Toastr::info('Lorem ipsum dolor sit','topCenter');
Toastr::info('Lorem ipsum dolor sit','bottomCenter');

```


### Pink

```bash
$toastr->pink('Lorem ipsum dolor sit','topLeft');
$toastr->pink('Lorem ipsum dolor sit','topRight');
$toastr->pink('Lorem ipsum dolor sit','bottomLeft');
$toastr->pink('Lorem ipsum dolor sit','bottomRight');
$toastr->pink('Lorem ipsum dolor sit','topCenter');
$toastr->pink('Lorem ipsum dolor sit','bottomCenter');

```
Or 


```bash
Toastr::pink('Lorem ipsum dolor sit','topLeft');
Toastr::pink('Lorem ipsum dolor sit','topRight');
Toastr::pink('Lorem ipsum dolor sit','bottomLeft');
Toastr::pink('Lorem ipsum dolor sit','bottomRight');
Toastr::pink('Lorem ipsum dolor sit','topCenter');
Toastr::pink('Lorem ipsum dolor sit','bottomCenter');

```


## Contribution

If you'd like to contribute to this package or report issues, please check the  <a href="https://github.com/fullstack124/php-toastr/issues"> Github repo</a> for more details.
 
## License
This package is open-source and is licensed under the MIT License. 
 
