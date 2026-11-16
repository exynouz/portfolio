import {test, expect} from '@playwright/test';
import {mkdirSync} from 'node:fs';

test('desktop: projects, study case, demo and contact links work', async ({page}) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/');
  await expect(page.getByRole('heading', {level: 1})).toContainText('terasa mudah');
  await expect(page.locator('.project-card')).toHaveCount(3);
  await page.getByRole('button', {name: 'Interfaces', exact: true}).click();
  await expect(page.locator('.project-card')).toHaveCount(1);
  await page.getByRole('button', {name: /All work/}).click();
  await page.getByRole('button', {name: 'Buka studi kasus Product Calculation System'}).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('tab', {name: /Coba interaksi/}).click();
  await expect(page.locator('.demo-total')).toContainText('750.000');
  await page.getByRole('button', {name: 'Tambahkan finishing'}).click();
  await expect(page.locator('.demo-total')).toContainText('885.000');
  await page.getByRole('slider', {name: /Jumlah produk/}).fill('5');
  await expect(page.locator('.demo-total')).toContainText('1.475.000');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(page.locator('.contact-email')).toHaveAttribute('href', 'mailto:311005bksvalen@gmail.com');
  await expect(page.locator('.contact-orb')).toHaveAttribute('href', /wa\.me\/628988668262/);
  await expect(page.locator('body')).toHaveJSProperty('scrollWidth', 1440);
  expect(errors).toEqual([]);
  mkdirSync('.sites-runtime/screenshots', {recursive:true});
  await page.evaluate(()=>{document.activeElement?.blur();scrollTo(0,0);});
  await page.waitForTimeout(200);
  await page.screenshot({path: '.sites-runtime/screenshots/desktop.png', fullPage: true});
});

test('theme preference persists after reloading', async ({page}) => {
  await page.goto('/');
  await page.getByRole('button', {name: 'Gunakan tema gelap'}).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('button', {name: 'Gunakan tema terang'}).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('mobile: navigation, viewport and case dialogs remain usable', async ({page}) => {
  await page.setViewportSize({width: 390, height: 844});
  await page.goto('/');
  await expect(page.locator('body')).toHaveJSProperty('scrollWidth', 390);
  const menu = page.getByRole('button', {name: 'Buka navigasi'});
  await menu.click();
  await expect(page.getByRole('navigation')).toBeVisible();
  await page.getByRole('link', {name:'Tentang', exact: true}).click();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await page.getByRole('button', {name:'Buka studi kasus Sample Product Workspace'}).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('button', {name:'Tutup studi kasus'}).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await page.evaluate(()=>scrollTo(0,0));
  mkdirSync('.sites-runtime/screenshots', {recursive:true});
  await page.screenshot({path: '.sites-runtime/screenshots/mobile.png', fullPage: true});
});
