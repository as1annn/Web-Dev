import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product} from '../../models/productkaspi';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-large',
      name: 'Airpods 3',
      description: 'Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивая невероятную детальность звучания. Вы будете чётко слышать весь спектр — от глубоких, насыщенных басов до кристально чистых высоких нот.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h63/h66/64362740416542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/h47/64362670358558.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large',
      name: 'Airpods Pro 2',
      description: 'Как и предыдущая версия, наушники снабжены активным шумоподавлением, но теперь инженеры Apple улучшили в новых аирподсах режим прозрачности, который еще лучше отсекает лишние шумы, при этом позволяя слышать происходящее вокруг.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-medium',
      name: 'Airpods 4',
      description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-airpods-4-active-noise-cancellation-belyi-124333921/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/he6/87309386219550.png?format=gallery-medium',
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h5c/63764029243422.jpg?format=gallery-medium',
      name: 'Apple EarPods Lightning',
      description: 'В отличие от круглой формы обычных наушников-вкладышей, конструкция новых наушников EarPods продиктована геометрией ушной раковины. ',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-earpods-lightning-belyi-4801876/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h49/h9c/63764029636638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb2/h57/63764030029854.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/hdb/63764030423070.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h12/hc8/84594232688670.jpg?format=gallery-medium',
      name: 'Airpods 2',
      description: 'Новые AirPods — это сочетание тщательно продуманного дизайна, передовых технологий и кристально чистого звука. Благодаря новому чипу H1 от Apple эти наушники могут работать в режиме телефонного разговора до 3 часов без подзарядки.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-airpods-2-with-lightning-belyi-114927908/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfb/h52/84594232819742.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h11/h81/84594233016350.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
      name: 'Marshall Major 4',
      description: 'Bluetooth гарнитура MARSHALL Major IV благодаря своим особенностям подарит вам комфортное прослушивание музыки самых разных жанров. ',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0f/pc2/17680137.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcf/pc4/17680141.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p08/pc5/17680143.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h96/he8/86377641672734.png?format=gallery-medium',
      name: 'Наушники Logitech G435 черный',
      description: 'Оснащенная мягкими амбушюрами и регулируемым оголовьем радиочастотная гарнитура Logitech G435 LIGHTSPEED исключительно комфортна.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/logitech-g435-chernyi-108443610/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h76/h75/86377641705502.png?format=gallery-medium',
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/h5d/82389321252894.jpg?format=gallery-medium',
      name: 'Наушники Logitech G Pro X 2',
      description: 'No descreption',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-2-lightspeed-chernyi-112221535/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd0/h6b/82389322301470.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4f/h95/82389323218974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcc/he2/82389325512734.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h88/h1b/84329424781342.jpg?format=gallery-medium',
      name: 'Наушники Samsung Galaxy Buds FE серый',
      description: 'Наушники TWS Samsung Galaxy Buds FE с системой шумоподавления обеспечивают комфорт прослушивания музыки и общения. За формирование реалистичного звучания отвечают однополосные динамические излучатели. Два внешних и один внутренний микрофоны передают чистый голос.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds-fe-seryi-114021918/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h69/h86/84329424814110.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/h97/84329424879646.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/h3c/84329424945182.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h76/86487436984350.png?format=gallery-medium',
      name: 'Наушники Samsung Galaxy Buds3 Pro серебристый',
      description: 'no descreption',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds3-pro-serebristyi-121198974/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h19/h04/86487437049886.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h69/hd2/86487437312030.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/h40/86487437443102.png?format=gallery-medium'
      ]
    },
  ];

  shareOnWhatsApp(link: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
  }

  shareOnTelegram(link: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}
