import os
import math
from PIL import Image

os.makedirs('public/menu_crops', exist_ok=True)

def remove_marker(im, cx, cy, r=22):
    pixels = im.load()
    w, h = im.size
    colors = []
    for deg in range(0, 360, 10):
        rad = math.radians(deg)
        bx = int(cx + (r + 4) * math.cos(rad))
        by = int(cy + (r + 4) * math.sin(rad))
        if 0 <= bx < w and 0 <= by < h:
            colors.append(pixels[bx, by])
    if not colors:
        return im
    avg_r = sum(c[0] for c in colors) // len(colors)
    avg_g = sum(c[1] for c in colors) // len(colors)
    avg_b = sum(c[2] for c in colors) // len(colors)
    for y in range(max(0, cy - r - 2), min(h, cy + r + 3)):
        for x in range(max(0, cx - r - 2), min(w, cx + r + 3)):
            if math.hypot(x - cx, y - cy) <= r:
                pixels[x, y] = (avg_r, avg_g, avg_b)
    return im

PAGE_DIR = 'public/pdf_pages'

MENU_CROPS = [
    # Category circles
    ('page_26.jpg', (120, 840, 680, 1480), 'cat_coffee.jpg', []),
    ('page_06.jpg', (70, 560, 650, 1260), 'cat_ricebowl.jpg', []),
    ('page_11.jpg', (70, 750, 650, 1450), 'cat_burger.jpg', [(195, 808, 22)]),
    ('page_22.jpg', (180, 1080, 820, 1680), 'cat_pastry.jpg', [(245, 1285, 22)]),

    # Coffee & Manual Brew
    ('page_26.jpg', (240, 860, 620, 1500), 'coffee_butterscotch.jpg', []),
    ('page_26.jpg', (40, 880, 350, 1500), 'coffee_nutella.jpg', []),
    ('page_26.jpg', (540, 960, 880, 1520), 'coffee_avocado.jpg', []),
    ('page_24.jpg', (320, 530, 830, 1100), 'coffee_latte_art.jpg', []),
    ('page_24.jpg', (150, 380, 520, 820), 'coffee_cappuccino.jpg', [(160, 480, 20)]),
    ('page_24.jpg', (600, 360, 960, 800), 'coffee_mochaccino.jpg', [(870, 415, 20)]),
    ('page_24.jpg', (440, 100, 760, 440), 'coffee_butter.jpg', [(455, 205, 20)]),
    ('page_23.jpg', (420, 670, 710, 1100), 'coffee_vietnam_drip.jpg', [(430, 890, 20)]),
    ('page_23.jpg', (700, 660, 970, 1080), 'coffee_affogato.jpg', []),

    # Rice & Bowls
    ('page_06.jpg', (60, 560, 650, 1300), 'rice_nanban.jpg', []),
    ('page_06.jpg', (550, 480, 1100, 1080), 'rice_salt_garlic_dory.jpg', [(580, 500, 22)]),
    ('page_05.jpg', (560, 680, 1150, 1350), 'rice_salted_egg.jpg', []),
    ('page_05.jpg', (140, 800, 620, 1380), 'rice_bbq_chicken.jpg', [(220, 850, 20)]),
    ('page_02.jpg', (50, 370, 570, 920), 'rice_goreng_ikan_asin.jpg', [(115, 415, 22)]),
    ('page_02.jpg', (50, 700, 640, 1350), 'rice_ayam_cabe_garam.jpg', [(90, 1070, 22)]),
    ('page_02.jpg', (540, 480, 1150, 1050), 'rice_ayam_hitam.jpg', [(1150, 680, 22)]),
    ('page_03.jpg', (400, 540, 940, 1180), 'rice_bebek_sereh.jpg', []),
    ('page_04.jpg', (50, 670, 600, 1300), 'rice_fried_chicken.jpg', [(80, 960, 22)]),
    ('page_04.jpg', (560, 700, 1150, 1380), 'rice_ayam_geprek.jpg', [(1100, 830, 22)]),

    # Burger & Hot Plate
    ('page_11.jpg', (50, 730, 640, 1480), 'burger_classic_beef.jpg', [(195, 808, 22)]),
    ('page_11.jpg', (580, 660, 1150, 1280), 'burger_classic_cheese.jpg', [(840, 680, 22)]),
    ('page_11.jpg', (120, 470, 660, 1050), 'burger_crispy_chicken.jpg', [(270, 490, 22)]),
    ('page_12.jpg', (110, 470, 660, 1180), 'burger_double_cheese.jpg', [(155, 500, 22)]),
    ('page_12.jpg', (580, 670, 1150, 1380), 'burger_bbq_beef.jpg', [(980, 715, 22)]),
    ('page_07.jpg', (480, 220, 1180, 750), 'hotplate_chicken_steak.jpg', [(885, 260, 22)]),
    ('page_07.jpg', (380, 650, 1150, 1280), 'hotplate_crispy_fillet.jpg', [(530, 750, 22)]),
    ('page_07.jpg', (20, 440, 590, 1050), 'hotplate_fish_chips.jpg', [(120, 480, 22)]),

    # Snacks & Platters
    ('page_14.jpg', (150, 490, 1150, 1050), 'snack_local_sampler.jpg', []),
    ('page_14.jpg', (50, 820, 1180, 1550), 'snack_western_sampler.jpg', []),
    ('page_15.jpg', (50, 520, 580, 1000), 'snack_chicken_wings.jpg', [(170, 580, 22)]),
    ('page_15.jpg', (540, 520, 950, 950), 'snack_siomay.jpg', [(910, 590, 22)]),
    ('page_15.jpg', (450, 780, 1100, 1250), 'snack_potato_chips.jpg', []),
    ('page_15.jpg', (350, 1050, 950, 1600), 'snack_tahu_cabe_garam.jpg', []),
    ('page_16.jpg', (70, 950, 620, 1550), 'snack_cheese_fries.jpg', [(615, 1290, 22)]),
    ('page_16.jpg', (560, 850, 1140, 1450), 'snack_calamari.jpg', []),
    ('page_16.jpg', (380, 480, 700, 880), 'snack_french_fries.jpg', [(565, 485, 22)]),

    # Toast, Croissant & Sweet Desserts
    ('page_22.jpg', (560, 420, 1150, 940), 'pastry_almond_croissant.jpg', [(720, 480, 22)]),
    ('page_22.jpg', (180, 1080, 800, 1680), 'pastry_butter_croissant.jpg', [(295, 1270, 22)]),
    ('page_22.jpg', (600, 750, 1080, 1250), 'pastry_pain_chocolat.jpg', [(680, 880, 22)]),
    ('page_20.jpg', (20, 1100, 620, 1680), 'dessert_lava_cake.jpg', []),
    ('page_20.jpg', (500, 770, 1150, 1380), 'dessert_caramel_banana.jpg', []),
    ('page_20.jpg', (40, 550, 640, 1080), 'dessert_pisang_goreng.jpg', []),
    ('page_21.jpg', (40, 850, 520, 1350), 'toast_french_toast.jpg', [(225, 875, 22)]),
    ('page_21.jpg', (140, 1050, 680, 1550), 'toast_kaya_butter.jpg', []),

    # Blended Frappe, Yakult, Tea & Matcha
    ('page_29.jpg', (730, 670, 1180, 1350), 'frappe_lotus_biscoff.jpg', []),
    ('page_29.jpg', (470, 580, 820, 1150), 'frappe_cookies_cream.jpg', []),
    ('page_29.jpg', (240, 750, 560, 1350), 'frappe_chocolate_peanut.jpg', []),
    ('page_30.jpg', (40, 420, 1180, 1250), 'yakult_series_rainbow.jpg', []),
    ('page_31.jpg', (260, 840, 640, 1500), 'tea_mango_lychee.jpg', []),
    ('page_31.jpg', (640, 860, 1050, 1500), 'tea_strawberry.jpg', []),
    ('page_32.jpg', (400, 560, 740, 1100), 'matcha_strawberry.jpg', []),
    ('page_32.jpg', (230, 620, 520, 1100), 'matcha_latte.jpg', []),
    ('page_32.jpg', (50, 750, 330, 1250), 'matcha_dirty.jpg', []),
    ('page_32.jpg', (470, 750, 850, 1250), 'matcha_affogato.jpg', []),
]

for src_name, box, dst_name, markers in MENU_CROPS:
    src_path = os.path.join(PAGE_DIR, src_name)
    if not os.path.exists(src_path):
        continue
    im = Image.open(src_path)
    cropped = im.crop(box)
    for (mx, my, mr) in markers:
        cx = mx - box[0]
        cy = my - box[1]
        if 0 <= cx < cropped.width and 0 <= cy < cropped.height:
            cropped = remove_marker(cropped, cx, cy, mr)
    dst_path = os.path.join('public/menu_crops', dst_name)
    cropped.save(dst_path, quality=95)
    print(f"Generated {dst_name} ({cropped.size[0]}x{cropped.size[1]})")

print("Cropping finished!")
