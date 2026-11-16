import {test, expect} from '@playwright/test';
import {mkdirSync} from 'node:fs';

test('desktop: module previews, project filtering, details and contact', async ({page})=>{
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/');
  await expect(page.getByRole('heading',{level:1})).toContainText('Ramadhan');
  await expect(page.locator('.project-card')).toHaveCount(6);
  await page.getByRole('button',{name:'SWG Spiral Wound Gasket'}).click();
  await expect(page.locator('.featured-workspace .workspace-heading')).toContainText('Spiral Wound Gasket');
  await page.locator('.featured-workspace').getByRole('button',{name:'Material',exact:true}).click();
  await expect(page.locator('.featured-workspace .workspace-fields')).toContainText('Master data');
  await page.getByRole('button',{name:'Operasional',exact:true}).click();
  await expect(page.locator('.project-card')).toHaveCount(1);
  await page.getByRole('button',{name:'Buka detail Sample Product'}).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await page.getByRole('button',{name:'Semua',exact:true}).click();
  await expect(page.locator('.contact-email')).toHaveAttribute('href','mailto:311005bksvalen@gmail.com');
  await expect(page.locator('.contact-arrow')).toHaveAttribute('href',/wa\.me\/628988668262/);
  await expect(page.locator('body')).toHaveJSProperty('scrollWidth',1440);
  expect(errors).toEqual([]);
  mkdirSync('.sites-runtime/screenshots',{recursive:true});
  await page.evaluate(()=>{document.activeElement?.blur();scrollTo(0,0);});
  await page.waitForTimeout(200);
  await page.screenshot({path:'.sites-runtime/screenshots/desktop.png',fullPage:true});
});

test('mobile: navigation, module switch and dialog',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await page.goto('/');
  await expect(page.locator('body')).toHaveJSProperty('scrollWidth',390);
  const menu=page.getByRole('button',{name:'Buka navigasi'});
  await menu.click();
  await page.getByRole('navigation').getByRole('link',{name:'Tentang',exact:true}).click();
  await expect(menu).toHaveAttribute('aria-expanded','false');
  await page.getByRole('button',{name:'EJM Metal Expansion Joint'}).click();
  await page.locator('.featured-info').getByRole('button',{name:'Detail project'}).click();
  await expect(page.getByRole('dialog')).toContainText('Metal Expansion Joint');
  await page.getByRole('button',{name:'Tutup detail proyek'}).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  mkdirSync('.sites-runtime/screenshots',{recursive:true});
  await page.evaluate(()=>{document.activeElement?.blur();scrollTo(0,0);});
  await page.waitForTimeout(200);
  await page.screenshot({path:'.sites-runtime/screenshots/mobile.png',fullPage:true});
});
