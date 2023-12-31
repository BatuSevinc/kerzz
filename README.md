# AÇIKLAMA
 - Bu proje, React kullanılarak geliştirilmiş tek sayfalık bir web uygulamasıdır. Uygulama, API üzerinden veri çekimi, konum tabanlı mağaza listesi, infinite-scroll özelliği, arama, filtreleme, sepet işlevi, fatura oluşturma, skeleton ekranları ve responsive tasarım gibi çeşitli özellikleri içermektedir.

 ###### https://batuhansevinc-kerzz.netlify.app/

## PROJE YAPISI

#### 1- API Üzerinden Veri Çekimi: 
Uygulama, belirli bir API üzerinden post metoduyla veri çekimi yapar. Bu veriler, kullanıcıya mağaza bilgilerini sunar.

#### 2- Konum Tabanlı Mağaza Listesi: 
Kullanıcının izni dahilinde bulunduğu lokasyonu alarak, mağazaların konumlarına göre kilometre hesabı yapar ve listeler.

#### 3- Infinite-Scroll Özelliği: 
Yoğun veri kullanımını ele almak için sayfanın aşağısına indikçe otomatik olarak 24'lük veri çekimi yapar.

#### 4- Arama (Search) Özelliği: 
Kullanıcının mağazalar arasında arama yapmasına olanak tanır.

#### 5- Filtreleme İmkanı: 
Kullanıcıya mağaza listesini filtreleme imkanı sunar.

#### 6- Sepet İşlevi: 
Kullanıcının sepetine ürün eklemesine, çıkarmasına ve sipariş vermesine olanak tanır.

#### 7- Favori Oluşturma: 
Kullanıcının favorilere eklemesi sonucu eklenenler localStorage'a ve navbar kısmında bulunan favoriler kısmına eklenir. Kullanıcı tarayıcıyı kapatsa bile favoriye ekledikleri localStorage'de saklanarak kullanıcının tekrar giriş yapması halinde önceden eklediği favorilere ulaşabilir.

#### 8- Ürün Detayı:
Kullanıcı istediği ürünün üzerine tıklayarak daha detaylı bilgiye ulaşabilir. İsterse detay kısmından favorilere ekleyebilir veya favorilerden kaldırabilir.

#### 9- Skeleton Ekranları: 
Eksik veya gelmeyen bilgiler için kullanıcıya bilgi vermek amacıyla skeleton ekranları kullanır.

#### 10- Responsive (Duyarlı) Tasarım: 
Farklı ekran boyutlarına uyum sağlayacak şekilde tasarlanmıştır.

### KULLANILAN PAKETLER
 - Tailwind Css
 - React Icons
 - Google Fonts
 - Lodash