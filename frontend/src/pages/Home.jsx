import React, { useState } from 'react';
import '../styles/Home.css';  // Ha a fájl a styles mappában van

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [note, setNote] = useState("");  // A jegyzet szövege

  // Jegyzetek hozzáadása
  const notes = {
    Frontend: `Főlink:https://drive.google.com/drive/folders/1DlgW65MCmiBZ3KYmx0BeVt1SvmKJjXB2?usp=sharing<br>
    Link:https://drive.google.com/drive/folders/1LyHedkTpP6i1Kgeb_n0WqiphJOdlH-Al?usp=sharing<br>
    Link2:https://drive.google.com/drive/folders/1gwYNK2piM8700QsOQZcuZR_Q8Z7_Akwp?usp=sharing<br>
    ng n FoodWebshop --standalone=false<br>
    cd FoodWebshop<br>
    ng g c login<br>
    ng g c shop<br>
    ng g c products<br>
    ng g c cart<br>
    ng g c error<br>
   <p>
    ng g s base<br>
    ng add @ng-bootstrap/ng-bootstrap<br>
    angular.json style[]=>script[] css=>json<br>
    ng serve -o<br>
    `,
    Backend: `
<h2>Backend JSON</h2><br>
Főlink:https://drive.google.com/drive/folders/1DlgW65MCmiBZ3KYmx0BeVt1SvmKJjXB2?usp=sharing<br>
Link: https://drive.google.com/file/d/1Uw7ihAqRY-UD6-RLOOFVqWF8TPuUdsbD/view?usp=sharing<br>
1. Először hozz létre egy új Laravel projektet a következő parancs futtatásával:
<pre>composer create-project laravel/laravel Proba1</pre>
<p>

</p>
2. Nem kellenek importok.
<p>
A Seeder ugyanúgy kelleni fog. A Database Seeder-ben egy tömbben foglaljuk össze a seeder-eket!
</p>
3. Modell is szükséges. Az adattáblával a modell van kapcsolatban.
</p>
4. Kontroller viszont nem kell!!!! E nélkül is meglesz a kapcsolat.
</p>
5. Az SQL fájlt a seeder mellé kell rakni, a .CSV-t a database-&gt;private-&gt;public mappába.
<p>
A JSON-t viszont máshová kell rakni!
</p>

<h3>1. Készítsd el a migrációt:</h3>
<pre>php artisan make:migration create_rental_items_table</pre>
<p>Ezután a migrációs fájlban a következő kódot kell hozzáadni:</p>
<pre>
public function up(): void
{
    Schema::create('rentalitems', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('type');
        $table->string('status');
        $table->string('notes');
        $table->timestamps();
    });
}
</pre>
<h3>2. Állítsd be az .env fájlt:</h3>
<pre>
DB_CONNECTION=mysql<br>
DB_HOST=127.0.0.1<br>
DB_PORT=3306<br>
DB_DATABASE=jewelry<br>
DB_USERNAME=root<br>
DB_PASSWORD=
</pre>
<h3>3. Hajtsd végre a migrációt:</h3>
<pre>php artisan migrate</pre>
<h3>4. Készítsd el a modellt:</h3>
<pre>php artisan make:model RentalItem</pre>
<p>Ezután a modellben a következő kódot kell hozzáadni:</p>
<pre>
class RentalItem extends Model
{
    protected $fillable = [
        'name',
        'type',
        'status',
        'notes',
    ];
}
</pre>

<h3>5. Hozd létre a Seeder-t:</h3>
<pre>php artisan make:seeder RentItemSeeder</pre>
<p>Ezután másold be a JSON fájlt a következő helyre:</p>
<pre>C:\Users\Valami\Valami\Valami\.02\Proba1\database\seeders</pre>
<p>A seeder-be a következő kódot kell másolni:</p>
<pre>
use App\Models\RentalItem;
use Illuminate\Support\Facades\File;

class RentItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = File::get(database_path('jewelry_inventory.json'));
        $data = json_decode($json, true);

        foreach ($data as $item) {
            RentalItem::create($item);
        }
    }
}
</pre>

<h3>6. A DatabaseSeeder frissítése:</h3>
<pre>
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RentItemSeeder::class,
            // Add other seeders here if needed
        ]);
    }
}
</pre>

<h3>7. Futtasd a seeder-t:</h3>
<pre>php artisan db:seed</pre>

<h2>Backend 2</h2><br>
Főlink:https://drive.google.com/drive/folders/1DlgW65MCmiBZ3KYmx0BeVt1SvmKJjXB2?usp=sharing<br>
Link:https://drive.google.com/file/d/1nt9LZ61-n6G4SLFIZQRz046wAwlq8PWl/view?usp=sharing<br>
1. Először hozz létre egy új Laravel projektet a következő parancs futtatásával:
<pre>composer create-project laravel/laravel 01</pre>

2. Navigálj a projekt mappájába:
<pre>cd 01</pre>

3. Futtasd az alábbi parancsot a szükséges API csomag telepítéséhez:
<pre>php artisan install:api</pre>
<p>
Ez egy fontos parancs, kell!!! Nem szabad elfelejteni!
</p>
<p>
Kérdezni fogja, hogy migráljon-e. A válasz legyen <strong>nem</strong>.
</p>

4. Állítsd be az .env fájlt:
<p>Kikommenteld a kommenteket, és add hozzá a következő adatokat:</p>
<pre>
DB_CONNECTION=mysql<br>
DB_HOST=127.0.0.1<br>
DB_PORT=3306<br>
DB_DATABASE=01<br>
DB_USERNAME=root<br>
DB_PASSWORD=
</pre>

5. Készítsd el a migrációkat és a modelleket:
<pre>php artisan make:migration create_cars_table</pre>
<pre>php artisan make:migration create_bookings_table</pre>
<pre>php artisan make:model Car</pre>
<pre>php artisan make:model Booking</pre>
<pre>php artisan make:controller CarController</pre>
<pre>php artisan make:controller BookingController</pre>

<p>Fontos: Az elnevezéseknek pontosan így kell lenniük!</p>
<p>A feladatból kiderül, hogy milyen típusú migrációkat kell létrehozni.</p>

6. Töltsd fel a migrációs fájlokat és a megfelelő mezőket a cars és bookings táblákhoz.
<p>A cars tábla migrációja így nézzen ki:</p>
<pre>
public function up(): void
{
    Schema::create('cars', function (Blueprint $table) {
        $table->id();
        $table->string('brand');
        $table->string('model');
        $table->string('licensePlate');
        $table->integer('year');
        $table->integer('dailyPrice');
        $table->timestamps();
    });
}
</pre>

7. Készítsd el a seedereket:
<pre>php artisan make:seeder CarSeeder</pre>
<pre>php artisan make:seeder BookingSeeder</pre>

8. Futtasd le a migrációt:
<pre>php artisan migrate</pre>
<p>Fontos: A migrációhoz futtatni kell a XAMPP-ot!</p>

9. Másold a .csv fájlokat a megfelelő helyre a projekt könyvtárba:
<pre>C:\Users\Valami\Valami\Valami\.2025\.01\storage\app\private\public</pre>
<p>Én hozom létre ezt a public mappát!</p>

10. A következő csomagot kell telepítened a CSV fájlok kezeléséhez:
<pre>composer require league/csv</pre>
<p>Importáld ezt a csomagot a seeder-be.</p>

11. Frissítsd a DatabaseSeeder-t, hogy egyben lefuttathasd mindkét seeder-t:
<pre>
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            CarSeeder::class,
            BookingSeeder::class,
        ]);
    }
}
</pre>

12. Futtasd a seeder-t:
<pre>php artisan db:seed</pre>

-------------------------------------------------------------------------------------------<br>

13. Most készítsd el a request osztályokat:
<pre>php artisan make:request CarRequest</pre>
<pre>php artisan make:request BookingRequest</pre>
<p>A require szabályt alapból használni kell, habár a feladatban nincs rögzítve.</p>

14. A Request osztályokban ne felejtsd el a authorize metódust true-ra állítani:
<pre>
public function authorize()
{
    return true;
}
</pre>
<p>Különben hibát fogsz kapni.</p>

15. Két importot és egy failedValidation metódust kell beilleszteni a request osztályokba. Ezeket a start » oktatas » web » back-end_framework » laravel » laravel_rest_api_drink_pelda oldalon találhatod.</p>

16. A controller-ekben írd meg a logikát.<br>

17. Az api.php fájlban hozz létre egy végpontot.<br>

18. Indítsd el a szervert:
<pre>php artisan serve</pre>

19. Ne felejtsd el, hogy a modellekben fel kell venni a mezőket, hogy írhatóvá váljanak:
<pre>
class Car extends Model
{
    protected $fillable = [
        "brand", "model", "licensePlate", "year", "dailyPrice"
    ];
}
</pre>

20. A cars és bookings táblák között kapcsolatot kell létrehozni. Ezt a modellekben kell megtenni, használd a hasMany és belongsTo relációkat.

<p>A belongsTo kapcsolatot kell alkalmazni arra a táblára, amelyik tartalmazza az idegen kulcsot.</p>

21. Teszteld az API-t Insomniában!
<p>
<h2>Backend Offices 1</h2><br>
Főlink:https://drive.google.com/drive/folders/1DlgW65MCmiBZ3KYmx0BeVt1SvmKJjXB2?usp=sharing<br>
Link:https://drive.google.com/file/d/1FvQUzPoQS4_veDf_XPwH9X7xunBsEZaV/view?usp=sharing<br>
1. Először hozz létre egy új Laravel projektet a következő parancs futtatásával:
<pre>composer create-project laravel/laravel Office</pre>

2. Navigálj a projekt mappájába:
<pre>cd Office</pre>

3. Futtasd az alábbi parancsot a szükséges API csomag telepítéséhez:
<pre>php artisan install:api</pre>

<p>FONTOS: Sok parancs a szit.hu-n fent lesz!!!!</p>
<p><a href="https://szit.hu" target="_blank">start » oktatas » web » back-end_framework » laravel » laravel_bevezetes</a></p>
<p><a href="https://szit.hu" target="_blank">start » oktatas » web » back-end_framework » laravel » laravel_jegyzet</a></p>

4. Készítsd el a migrációt:
<pre>php artisan make:migration create_rentals_table</pre>

<p>A migrációs fájl tartalma:</p>
<pre>
public function up(): void<br>
{<br>
    Schema::create('rentals', function (Blueprint $table) {<br>
        $table->id();<br>
        $table->integer('uid');<br>
        $table->foreignId('office_id');<br>
        $table->datetime('startDate');<br>
        $table->datetime('endDate');<br>
        $table->integer('dailyRate');<br>
        $table->integer('baseFee');<br>
        $table->timestamps();<br>
    });<br>
}<br>
</pre>

5. Állítsd be az .env fájlt:<br>
<p>Kikommenteld a kommenteket, és add hozzá a következő adatokat:</p>
<pre>
DB_CONNECTION=mysql<br>
DB_HOST=127.0.0.1<br>
DB_PORT=3306<br>
DB_DATABASE=office<br>
DB_USERNAME=root<br>
DB_PASSWORD=<br>
</pre>

6. Futtasd le a migrációt:<br>
<pre>php artisan migrate</pre>
<p>Ehhez futnia kell az XAMPP-nak!!!</p>

7. Készítsd el a kontrollert:<br>
<pre>php artisan make:controller RentalController</pre>

<p>A controller tartalma:</p>
<pre>
use App\Http\Requests\RentalRequest;<br>
use App\Models\Rental;<br>

class RentalController extends Controller<br>
{<br>
    public function store(RentalRequest $request) {<br>
        $request->validated();<br>
    }<br>
}<br>
</pre>

8. Most generálj egy request osztályt:<br>
<pre>php artisan make:request RentalRequest</pre>

9. Készítsd el a modellt:<br>
<pre>php artisan make:model Rental</pre>

10. A Request osztályban állítsd át az authorize metódust true-ra:<br>
<pre>
public function authorize()<br>
{<br>
    return true;<br>
}<br>
</pre>

<p>Ez a lépés nagyon fontos, mert különben hibát kapsz.</p>

<h2>Backend Offices 2</h2><br>
Főlink:https://drive.google.com/drive/folders/1DlgW65MCmiBZ3KYmx0BeVt1SvmKJjXB2?usp=sharing<br>
Link:https://drive.google.com/file/d/1Adc22sCquLqn70lnaJ0ctzTE385iqN8p/view?usp=sharing<br>
Először hozz létre egy új Laravel projektet a következő parancs futtatásával:

<pre>composer create-project laravel/laravel Office</pre>
Navigálj a projekt mappájába:

<pre>cd Office</pre>
Futtasd az alábbi parancsot a szükséges API csomag telepítéséhez:

<pre>php artisan install:api</pre> <p><strong>FONTOS:</strong> Sok parancs a szit.hu-n fent lesz!!!!</p> <p><a href="https://szit.hu" target="_blank">start » oktatas » web » back-end_framework » laravel » laravel_bevezetes</a></p> <p><a href="https://szit.hu" target="_blank">start » oktatas » web » back-end_framework » laravel » laravel_jegyzet</a></p>
Készítsd el a migrációt:

<pre>php artisan make:migration create_rentals_table</pre> <p>A migrációs fájl tartalma:</p> <pre> public function up(): void { Schema::create('rentals', function (Blueprint $table) { $table->id(); $table->integer('uid'); $table->foreignId('office_id'); $table->datetime('startDate'); $table->datetime('endDate'); $table->integer('dailyRate'); $table->integer('baseFee'); $table->timestamps(); }); } </pre>
Állítsd be az .env fájlt:

<p>Kikommenteld a kommenteket, és add hozzá a következő adatokat:</p> <pre> DB_CONNECTION=mysql<br> DB_HOST=127.0.0.1<br> DB_PORT=3306<br> DB_DATABASE=office<br> DB_USERNAME=root<br> DB_PASSWORD= </pre>
Futtasd le a migrációt:

<pre>php artisan migrate</pre> <p>Ehhez futnia kell az XAMPP-nak!!!</p>
Készítsd el a kontrollert:

<pre>php artisan make:controller RentalController</pre> <p>A controller tartalma:</p> <pre> use App\Http\Requests\RentalRequest; use App\Models\Rental;
class RentalController extends Controller
{
public function store(RentalRequest $request) {
$request->validated();
}
}
</pre>

Most generálj egy request osztályt:

<pre>php artisan make:request RentalRequest</pre>
Készítsd el a modellt:

<pre>php artisan make:model Rental</pre>
A Request osztályban állítsd át az authorize metódust true-ra:

<pre> public function authorize() { return true; } </pre> <p>Ez a lépés nagyon fontos, mert különben hibát kapsz.</p>
A RentalRequest osztály tartalma (itt használjuk a Carbon osztályt is):

<pre> use Carbon\Carbon; use Illuminate\Http\Exceptions\HttpResponseException; <br>
use Illuminate\Contracts\Validation\Validator;<br>
public function rules(): array <br>
{ <br>
 return [<br>
  "startDate" => "after:today", <br>
  "endDate" => [function ($attribute, $value, $fail) {<br>
   $startDate = Carbon::parse(request("startDate"));<br>
   $endDate = Carbon::parse($value);<br> 
   if ($endDate->lessThan($startDate->addDays(3)) || <br>
   $endDate->greaterThan($startDate->addDays(90))) { <br>
   $fail("Foglalási időpontok nem megfelelőek.");<br>
    } <br>
     }],<br>
      ]; <br>
      } <br>
       public function failedValidation(Validator $validator) { <br>
       throw new HttpResponseException(response()->json([<br>
        "success" => false,<br>
         "message" => "Adatbeviteli hiba", <br>
         "error" => $validator->errors() <br>
         ], 400)); <br>
         } </pre>
Most jöhetnek a végpontok az routes/api.php fájlban:

<pre> Route::get('/berlesek', [RentalController::class, 'index']); <br>
Route::get('/berlesek/{id}', [RentalController::class, 'rent']); <br>
Route::post('/berlesek', [RentalController::class, 'store']); <br>
Route::delete('/berlesek/{id}', [RentalController::class, 'destroy']); </pre>
A RentalController tartalma:

<pre> class RentalController extends Controller<br>
{<br>
public function store(RentalRequest $request) {<br>
$bookings = Rental::where("office_id", $request["office_id"])<br> 
->where("endDate", ">=", $request["startDate"])->get();<br> 
if (count($bookings) > 0) { return response()->json(["error" => "Van foglalás a megadott időszakra"]);<br> 
} <br>
$bookings = Rental::create([<br>
'uid' => $request["uid"], <br>
'office_id' => $request["office_id"], <br>
'startDate' => $request["startDate"], <br>
'endDate' => $request["endDate"], <br>
'dailyRate' => $request["dailyRate"], <br>
'baseFee' => $request["baseFee"] ]); <br>
return response()->json($bookings); <br>
} <br>
} </pre>
 <br>
Kell az XAMPP. Feltöltjük a táblát és kipróbáljuk a szabályokat.<br>
php artisan serve
<br>
A modelben fel kell venni a $fillable mezőt:

<pre> protected $fillable = [<br>
 'uid', <br>
 'office_id',<br>
 'startDate',<br>
 'endDate',<br>
 'dailyRate', <br>
 'baseFee' ]; </pre>
A Controllerbe még hozzá kell adni az index metódust:

<pre> public function index() {<br>
$rentals = Rental::all();<br> 
return response()->json($rentals); } </pre>
Most próbáljuk ki az alkalmazást az alábbi parancs futtatásával:

<pre>php artisan serve</pre>
Ezután kipróbálhatod a végpontokat és a szabályokat.

<p>Ha minden rendben van, a szit.hu-n elérhető jegyzetek és példák segítenek tovább!</p>
<p>
<h2>Minden</h2>
<h2>JSON</h2><br>
Főlink:https://drive.google.com/drive/folders/1DlgW65MCmiBZ3KYmx0BeVt1SvmKJjXB2?usp=sharing<br>
Link:https://drive.google.com/file/d/1e1-pmXqH3weP1DQbf8-5KmA2iDug4yH3/view?usp=sharing<br>
SZÓVAL HA JSON A FILE AKKOR íGY MŰKÖDIK<br>
1. CMD-BEN Projekt generálás C:\Users\Valami\Valami\.2025\.00>composer create-project laravel/laravel Proba2*vagy saját projekt neve<br>
2. Miután a hosszas letöltés megtörtént belépünk a projekt fileba - cd *projekt neve<br>
3. Telepítjük az apikat - C:\Users\Valami\Valami\.2025\.00\Proba2>php artisan install:api<br>
            Itt nem migrálunk szóval amikor kérdezi hogy migráljon akkor N betű vagyis NO<br>
4. Itt egy code . de előtte még a .env-ben beírjuk az adatbázis nevét átírjuk a sqlite-ot mysqlre<br>
5. Králunk egy migrációs táblát C:\Users\Valami\Valami\.2025\.00\Proba2>php artisan make:migration create_rental_items_table<br>
6. Králunk egy modelt C:\Users\Valami\Valami\.2025\.00\Proba2>php artisan make:model RentalItem<br>
7. Králunk egy seedert C:\Users\Valami\Valami\.2025\.00\Proba2>php artisan make:seeder RentalItemSeeder<br>
<p>
5/1. A create_rental_items_table bent van a migrationsban ami így kell hogy kinézzen <br>
<?php<br>
<p>
use Illuminate\Database\Migrations\Migration;<br>
use Illuminate\Database\Schema\Blueprint;<br>
use Illuminate\Support\Facades\Schema;<br>
<p>
/*<br>
    "ID": "1",<br>
        "Name": "Valami",<br>
        "Type": "Szett",<br>
        "Status": "Új",<br>
        "Notes": "Raktáron"<br>
*/<br>
return new class extends Migration<br>
{<br>
    /**<br>
     * Run the migrations.<br>
     */<br>
    public function up(): void<br>
    {<br>
        Schema::create('rental_items', function (Blueprint $table) {<br>
            $table->id();<br>
            $table->string("Name");<br>
            $table->string("Type");<br>
            $table->string("Status");<br>
            $table->string("Notes");<br>
            $table->timestamps();<br>
        });<br>
    }<br>
<p>
    /**<br><br>
     * Reverse the migrations.<br>
     */<br>
    public function down(): void<br>
    {<br>
        Schema::dropIfExists('rental_items');<br>
    }<br>
};<br>
<p>
6/1. A rentalitem model így kell hogy kinézzen <br>
<?php<br>
<p>
namespace App\Models;<br>
<p>
use Illuminate\Database\Eloquent\Model;<br>
<p>
class RentalItem extends Model<br>
{<br>
    protected $fillable = [<br>
        "name","type","status","notes"<br>
    ];<br>
}<br>
<p>
7/1. A rentalitemseeder így kell hogy kinézzen <br>
<?php<br>
<p>
namespace Database\Seeders;<br>
<p>
use Illuminate\Database\Console\Seeds\WithoutModelEvents;<br>
use Illuminate\Database\Seeder;<br>
use App\Models\RentalItem;<br>
use Illuminate\Support\Facades\File;<br>
<p>
class RentalItemSeeder extends Seeder<br>
{<br>
    /**<br>
     * Run the database seeds.<br>
     */<br>
    public function run(): void<br>
    {<br>
        $json = File::get(database_path("jewelry_inventory.json"));<br>
        $data = json_decode($json, true);<br>
<p>
        foreach($data as $item){<br>
<p>
            RentalItem::create($item);<br>
        }<br>
    }<br>
}<br>
<p>
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++<br>
<p>
A databaseseederben is ezt kell megírni <br>
<?php<br>
<p>
namespace Database\Seeders;<br>
<p>
use App\Models\User;<br>
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;<br>
use Illuminate\Database\Seeder;<br>
<p>
class DatabaseSeeder extends Seeder<br>
{<br>
    /**<br>
     * Seed the application's database.<br>
     */<br>
    public function run(): void<br>
    {<br>
        $this->call([<br>
            RentalItemSeeder::class<br>
        ]);<br>
    }<br>
}<br>
<p>
8. Miután ezek mind megvannak a migrálni kell C:\Users\Valami\Valami\.2025\.00\Proba2>php artisan migrate ezzel létrejön az adatbázis<br>
9. De az adatbázist fel kell tölteni adattal ahhoz viszont alapvető dolog hogy a JSON formátumú file legyen a database könyvtárban és ezt adjuk le C:\Users\Valami\Valami\.2025\.00\Proba2>php artisan db:seed<br>
<p>

  `,

    Console: `<h2>Console 1</h2><br>
    Főlink:https://drive.google.com/drive/folders/1DlgW65MCmiBZ3KYmx0BeVt1SvmKJjXB2?usp=sharing<br>
    Link:https://drive.google.com/file/d/1A1WB98vKResLPJBvf2idbTwRFgwVNqXv/view?usp=sharing<br>
    1. Console App (nem .NET Framework-ös)<br>
    Be kell pipálni, hogy sima projekt legyen. Don't use Top level Statements<br>
    <p>
    2. Data mappát kell csinálni a projekten belül és belehúzni a .csv fájlokat Drag and Drop-pal.
    Fontos, hogy a Debug-on belülre is be kell másolni a fájlt.
    Célszerű egyszer elindítani előtte a projektet, hogy legenerálja a fájlokat.<br>
    <p>
    3. Itt is kell egy osztály és ebbe az osztályba kell majd a számított mezőt beleírni (TotalPrice).
    
    A konstruktor neve ugyanaz legyen, mint az osztályé!!
    Mindent kell parse-olni, ami nem string, mert string típusú tömböt hosztunk létre.<br>
    <p>
    A Berles osztaly tartalma:<br>
    <p>
    internal class Berles<br>
    {<br>
        public int Uid { get; set; }<br>
        public int OfficeId { get; set; }<br>
        public DateTime StartDate { get; set; }<br>
        public DateTime EndDate { get; set; }<br>
        public int DailyRate { get; set; }<br>
        public int BaseFee { get; set; }<br>
        public string Name { get; set; }<br>
        <br>
        public Berles(string line )<br>
        {<br>
            string[] row = line.Split(",");<br>
            Uid = int.Parse(row[0]);<br>
            OfficeId = int.Parse(row[1]);<br>
            StartDate = DateTime.ParseExact(row[2], "yyyy-MM-dd", CultureInfo.InvariantCulture);<br>
            EndDate = DateTime.ParseExact(row[3], "yyyy-MM-dd", CultureInfo.InvariantCulture);<br>
            DailyRate = int.Parse(row[4]);<br>
            BaseFee = int.Parse(row[5]);<br>
            Name = row[6];<br>
        }<br>
    
        public int TotalPrice { <br>
            get <br>
            {<br>
                var days = (int)(EndDate - StartDate).TotalDays;<br>
                return days * DailyRate; <br>
            } <br>
        }<br>
    }<br>
    <p>
    4. Ezután beolvassuk a fájlokat!!<br>
    
    A Program.cs-ben:<br>
    <p>
    static void Main(string[] args)<br>
    {<br>
        List<Berles> berlesek = new List<Berles>();<br>
        foreach (var item in File.ReadAllLines("office_rentals_2024.csv").Skip(1))<br>
        {<br>
            berlesek.Add(new Berles(item));<br>
        }<br>
    }<br>
    <p>
    5. Most jön a többi feladat megoldása:<br>
    <p>
    //3. feladat<br>
    <p>
    var allTotalPrices = berlesek.Sum(b => b.TotalPrice);<br>
    Console.WriteLine($"A teljes 2024-es éves bevétel: {allTotalPrices:n0} euró ");<br>
    <p>
    //4. feladat<br>
    <p>
    var maxTotalPrice = berlesek.OrderByDescending(b => b.TotalPrice).FirstOrDefault();<br>
    Console.WriteLine($"A legdrágább bérlés az {maxTotalPrice.BaseFee} irodára történt, teljes ár: {maxTotalPrice.TotalPrice:n0} euró");<br>
    <p>
    //5. feladat<br>
    <p>
    var countOffices = berlesek.Select(b => b.OfficeId).Distinct().Count();<br>
    Console.WriteLine($"Összesen {countOffices} különböző irodát béreltek ki.");<br>
    <p>
    //6. feladat<br>
    <p>
    var mostBooking = berlesek.GroupBy(b => b.BaseFee).OrderByDescending(x => x.Count()).FirstOrDefault();<br>
    Console.WriteLine($"A legtöbbször bérelt iroda: {mostBooking.Key} ({mostBooking.Count()} bérlés)");<br>
    <p>
    //7. feladat<br>
    <p>
    var bookings = berlesek.GroupBy(b => b.Name);<br>
    foreach (var item in bookings)<br>
    {<br>
        Console.WriteLine($"{item.Key}: {item.Count()} bérlés");<br>
    }<br>
    <p>
    //8. feladat<br>
    <p>
    var avgRentals = berlesek.Select(b => (b.EndDate - b.StartDate).Days + 1).Average();<br>
    Console.WriteLine($"Átlagos bérlési időtartam: {avgRentals:F2} nap");<br>
    <p>
    <h2>Console 2</h2><br>
    Főlink:https://drive.google.com/drive/folders/1DlgW65MCmiBZ3KYmx0BeVt1SvmKJjXB2?usp=sharing<br>
    Link:https://drive.google.com/file/d/1dF-yYiCEBgSHLGeU3oEx-fMCnjc42aRx/view?usp=sharing<br>
        1. Console App (nem .NET Framework-ös)<br>
    Be kell pipálni, hogy sima projekt legyen. Don't use Top level Statements<br>
    <p>
    2. Data mappát kell csinálni a projekten belül és belehúzni a .csv fájlokat Drag and Drop-pal.<br>
    Fontos, hogy a Debug-on belülre is be kell másolni a fájlt.<br>
    Célszerű egyszer elindítani előtte a projektet, hogy legenerálja a fájlokat.<br>
    </p>
    3. Létre kell hozni az Osztályokat!!<br>
    <p>
    2 db .csv van, ezért két osztályt kell létrehozni.<br>
    </p>
    4. Utána az osztályokon belül az attriubútumokat a .csv-ben lévő fejléc alapján kell felvenni!<br>
    Aztán létrehoztunk egy paraméteres konstruktort a soronkénti beolvasáshoz.<br>
    <pre>
      //id,brand,model,licensePlate,year,dailyPrice<br>
      public int Id { get; set; }<br>
      public string Brand { get; set; }<br>
      public string Model { get; set; }<br>
      public string LicensePlate { get; set; }<br>
      public int Year { get; set; }<br>
      public int DailyPrice { get; set; }<br>
      public Car(string line) {<br>
          string[] row = line.Split(",");<br>
          Id = int.Parse(row[0]);<br>
          Brand = row[1];<br>
          Model = row[2];<br>
          LicensePlate = row[3];<br>
          Year = int.Parse(row[4]);<br>
          DailyPrice = int.Parse(row[5]);<br>
      }<br>
    </pre>
    <p>
    5. Ezután beolvassuk a fájlokat!!<br>
    A Program.cs-ben:<br>
    <pre>
      List<Car> cars = new List<Car>();<br>
      foreach (var item in File.ReadAllLines("cars.csv").Skip(1)) {<br>
          cars.Add(new Car(item));<br>
      }<br>
      List<Booking> bookings = new List<Booking>();<br>
      foreach (var item in File.ReadAllLines("bookings.csv").Skip(1)) {<br>
          bookings.Add(new Booking(item));<br>
      }<br>
    </pre>
    </p>
    <p> 
    6. Most jön a feladatok megoldása!!<br>
    1. feladat:<br>
    <pre>
      var sortedCars = cars.OrderByDescending(car => car.DailyPrice);<br>
      Console.WriteLine("1. feladat");<br>
      foreach (var car in sortedCars) {<br>
          Console.WriteLine($"{car.Brand} {car.Model} {car.DailyPrice}");<br>
      }<br>
    </pre>
    </p>
    <p>
    2. feladat:<br>
    <pre>
      Console.WriteLine("---------------------------------------------------------------");<br>
      Console.WriteLine("2. feladat");<br>
      foreach (var booking in bookings) {<br>
          var car = cars.FirstOrDefault(car => car.Id == booking.CarId);<br>
          Console.WriteLine($"{car.Brand} {car.Model} {car.LicensePlate} {booking.TotalPrice}");<br>
      }<br>
    </pre>
    </p>
    <p>
    3. feladat:<br>
    <pre>
      Console.WriteLine("---------------------------------------------------------------");<br>
      Console.WriteLine("3. feladat");<br>
      var mostBooking = bookings.GroupBy(b => b.CarId).OrderByDescending(g => g.Count()).FirstOrDefault();<br>
      var carMostBooking = cars.FirstOrDefault(c => c.Id == mostBooking.Key);<br>
      Console.WriteLine($"{carMostBooking.Id} {carMostBooking.Brand} {carMostBooking.Model}");<br>
    </pre>
    </p>
    <p>
    4. feladat:<br>
    <pre>
      Console.WriteLine("---------------------------------------------------------------");<br>
      Console.WriteLine("4. feladat");<br>
      var mostIncomeCarId = bookings.GroupBy(b => b.CarId).OrderByDescending(x => x.Sum(d => d.TotalPrice)).FirstOrDefault();<br>
      var mostIncomeCar = cars.FirstOrDefault(c => c.Id == mostIncomeCarId.Key);<br>
      Console.WriteLine($"{mostIncomeCar.Id} {mostIncomeCar.Brand} {mostIncomeCar.Model} {mostIncomeCar.LicensePlate}");<br>
    </pre>
    </p>
    <p>
    5. feladat:<br>
    <pre>
      Console.WriteLine("---------------------------------------------------------------");<br>
      Console.WriteLine("5. feladat");<br>
      var avgDays = bookings.Select(b => (b.EndDate - b.StartDate).Days).Average();<br>
      Console.WriteLine(avgDays);<br>
    </pre>
    </p>
    <p>
    6. feladat:<br>
    <pre>
      Console.WriteLine("---------------------------------------------------------------");<br>
      Console.WriteLine("6. feladat");<br>
      var lastBooking = bookings.OrderByDescending(b => b.StartDate).FirstOrDefault();<br>
      var lastBookingCar = cars.FirstOrDefault(c => c.Id == lastBooking.CarId);<br>
      Console.WriteLine($"{lastBooking.StartDate:yyyy.MM.dd} {lastBookingCar.Brand} {lastBookingCar.Model} {lastBookingCar.LicensePlate} {lastBookingCar.Year} {lastBookingCar.DailyPrice}");<br>
    </pre>
    </p>
    <p>
    7. feladat:<br>
    <pre>
      Console.WriteLine("---------------------------------------------------------------");<br>
      Console.WriteLine("7. feladat");<br>
      var fullIncome = bookings.Select(b => b.TotalPrice).Sum();<br>
      Console.WriteLine(fullIncome);<br>
    </pre>
    </p>
    <p>
    9. feladat:<br>
    <pre>
      Console.WriteLine("---------------------------------------------------------------");<br>
      Console.WriteLine("9. feladat");<br>
    </pre>
    </p>
    `,
    Desktop: `
    <h2>Asztalis alkalmazás</h2><br>
    Főlink:https://drive.google.com/drive/folders/1DlgW65MCmiBZ3KYmx0BeVt1SvmKJjXB2?usp=sharing<br>
    Link:https://drive.google.com/file/d/1Imqp3dX2njWmYsBbnYegldfhjfRpKnlZ/view?usp=sharing<br>
    1. Windows Forms App (.Net Framework nélkül)<br>
    <p>
    2. Átírni az ablak nevét. Jobb gomb az ablakon, Properties -> Text
    </p>
    3. Az ablakra felpakolni elemeket a View -> Toolbox-al lehet.<br>
    <p>
    4. Combobox kell, textbox meg button. A textbox-nak a Multilne attribútumát kell True-ra állítani, hogy kitöltse a helyet!!
    </p>
    <p>
    5. Layout -> Dock -> Top
    </p>
    6. Meg kell oldani, hogy egy új ablak megjelenjen. Project -> Add -> Form<br>
    Rá kell tenni a dolgokat és az előző ablak gombjára dupla katt.<br>
    <p>
    Előjön a kód, majd ezt kell beleírni:
    </p>
    <pre>
      private void button1_Click(object sender, EventArgs e) {<br>
          Maintenance maintenance = new Maintenance();<br>
          maintenance.Show();<br>
      }<br>
    </pre>
    <p>
    Ezzel példányosítottuk a Form-unkat és megmondtuk, hogy kattintásra jelenjen meg.
    </p>
    <p>
    7. Aztán be kell olvasni a cars.csv fájlt ugyanúgy, mint a Console App-nál volt.<br>
    Kell egy Cars osztály.<br>
    </p>
    <p>
    Majd a Forms1.cs-ben:<br>
    </p>
    <pre>
      private void Form1_Load(object sender, EventArgs e) {<br>
          List<Car> cars = new List<Car>();<br>
          foreach (var item in File.ReadAllLines("cars.csv").Skip(1)) {<br>
              cars.Add(new Car(item));<br>
          }<br>
          comboBox1.DataSource = cars;<br>
          comboBox1.DisplayMember = "LicensePlate";<br>
      }<br>
    </pre>
    <p>
    Ezzel beolvassuk a fájlt, és megjelenítjük a combobox-ban a rendszámokat.
    </p>
    <h2>Desktop 2</h2><br>
    Link: https://drive.google.com/file/d/1HYDmS5K2r714wockjEsKTv2RJW07CqMB/view?usp=sharing
    <p>
    1. Windows Forms App (.Net Framework nélkül)<br>
<br>
2. Kell egy Model mappa és abban lesz az osztály a beolvasáshoz.<br>
<br>
3. Kell egy Data mappa, abban lesz a .csv fájl (Drag and Drop)<br>
<br>
4. A .csv-t be kell másolni a Debug-on belülre is.<br>
Előtte érdemes egyszer ráindítani a projektre, hogy legenerálja a fájlokat.<br>
<br>
5. Most jön az osztály.<br>
Utána pedig a konstruktor.<br>
<br>
A konstruktor neve ugyanaz legyen, mint az osztályé!!<br>
Mindent kell parse-olni, ami nem string, mert string típusú tömböt hosztunk létre.<br>
<br>
internal class Office_cost<br>
{<br>
    //id;officename;datum;kategoria;osszeg;megjegyzes<br>
<br>
    public int Id { get; set; }<br>
    public string OfficeName { get; set; }<br>
    public DateTime Datum { get; set; }<br>
    public string Kategoria { get; set; }<br>
    public decimal Osszeg { get; set; }<br>
    public string Megjegyzes { get; set; }<br>
<br>
    public Office_cost(string line) {<br>
        string[] row = line.Split(";");<br>
        Id = int.Parse(row[0]);<br>
        OfficeName = row[1];<br>
        Datum = DateTime.Parse(row[2]);<br>
        Kategoria = row[3];<br>
        Osszeg = decimal.Parse(row[4]);<br>
        Megjegyzes = row[5];<br>
    }<br>
<br>
    public Office_cost() { }<br>
}<br>
<br>
6. Utána a Form1.cs-be kell beleírni a szükséges dolgokat a fájlbeolvasáshoz.<br>
<br>
public Form1()<br>
{<br>
    InitializeComponent();<br>
    LoadCsv();<br>
}<br>
<br>
List<Office_cost> officeCosts = new List<Office_cost>();<br>
private void LoadCsv() {<br>
    foreach (var item in File.ReadAllLines("office_costs_2024.csv").Skip(1))<br>
    {<br>
        officeCosts.Add(new Office_cost(item));<br>
    }<br>
}<br>
<br>
Ezzel kész a fájl beolvasása.(Ez volt az első feladat.)<br>
<br>
7. Utána a Form1.cs-ben fel kell pakolni az elemeket. A nevet beállítjuk. Ezt lehet kódból is és kézzel is.<br>
<br>
Most kódból csináljuk meg.<br>
<br>
 public Form1()<br>
 {<br>
     InitializeComponent();<br>
     Title();<br>
     LoadCsv();<br>
 }<br>
<br>
 List<Office_cost> officeCosts = new List<Office_cost>();<br>
 private void LoadCsv() {<br>
     foreach (var item in File.ReadAllLines("office_costs_2024.csv").Skip(1))<br>
     {<br>
         officeCosts.Add(new Office_cost(item));<br>
     }<br>
 }<br>
<br>
 private void Title() {<br>
     Text = "Office Cost Manager";<br>
     Width = 900;<br>
     Height = 600;<br>
 }<br>
<br>
8. 3. Az ablakra felpakolni elemeket a View -> Toolbox-al lehet.<br>
<br>
9. Kell egy DataGridView amit Dock-oltatni kell és az AutoSizeColumnsMode = Fill.<br>
<br>
Kell két Textbox, egy DateTimePicker, egy ComboBox és egy NumericUpDown. Meg egy Button.<br>
<br>
10. Miután feltettük a dolgokat, be kell tölteni az adatokat a táblázatba.<br>
Ehhez is kell egy függvény a Form1.cs-be.<br>
<br>
<br>
 public Form1()<br>
 {<br>
     InitializeComponent();<br>
     Title();<br>
     LoadCsv();<br>
     RefreshGrid();<br>
 }<br>
<br>
 List<Office_cost> officeCosts = new List<Office_cost>();<br>
 private void LoadCsv() {<br>
     foreach (var item in File.ReadAllLines("office_costs_2024.csv").Skip(1))<br>
     {<br>
         officeCosts.Add(new Office_cost(item));<br>
     }<br>
 }<br>
<br>
 private void Title() {<br>
     Text = "Office Cost Manager";<br>
     Width = 900;<br>
     Height = 600;<br>
 }<br>
<br>
 private void RefreshGrid() {<br>
     dgv.DataSource = null;<br>
     dgv.DataSource = officeCosts;<br>
 }<br>
<br>
11. Combobox -> jobb gomb: Edit Items... és ide kell beírni, hogy mik szerepeljenek benne.<br>
<br>
12. Aztán megcsináljuk, hogy az Add gomb működjön.<br>
<br>
private void RefreshGrid()<br>
{<br>
    dgv.DataSource = null;<br>
    dgv.DataSource = officeCosts;<br>
}<br>
<br>
private void button1_Click(object sender, EventArgs e)<br>
{<br>
    int officeId = officeCosts.Any() ? officeCosts.Max(i => i.Id)+1 : 1;<br>
    var newOfficeCost = new Office_cost<br>
    {<br>
        Id = officeId,<br>
        OfficeName = textBox1.Text,<br>
        Datum = dateTimePicker1.Value,<br>
        Kategoria = comboBox1.SelectedItem.ToString(),<br>
        Osszeg = numericUpDown1.Value,<br>
        Megjegyzes = textBox2.Text<br>
    };<br>
    officeCosts.Add(newOfficeCost);<br>
    RefreshGrid();<br>
}<br>
<br>
13. Végül megcsináljuk, hogy az adatok elmentődjenek a fájlba.Ezt is a Form1.cs-ben kell persze.<br>
<br>
private void SaveCsv() {<br>
    var lines = new List<string> { "id;officename;datum;kategoria;osszeg;megjegyzes" };<br>
    lines.AddRange(officeCosts.Select(x => $"{x.Id};{x.OfficeName};{x.Datum:yyyy-MM-dd};{x.Kategoria};{x.Osszeg};{x.Megjegyzes}"));<br>
    File.WriteAllLines("office_costs_2024.csv", lines);<br>
}<br>
<p>
  `,
  Weboldal: `
    <h2>Weboldal</h2>
<p>Ehhez a feladatot HTML-t CSS-t és Bootstrap-et szeretnék használni kizárólag.</p>

<pre><code>
1. Nyitunk egy VS Code-t, kell egy index.html és a bootstrap 5-ből a Starter Template.
2. Az első elem egy navbar lesz.
   Ebből kiszedjük azokat, amik nem kellenek.
3. Majd a navbar után belemásoljuk ezt is az index.html-be:
</code></pre>

<pre><code>&lt;div class="container"&gt;
    &lt;div class="row my-5"&gt;
        &lt;div class="col-12 col-md-6 mb-3"&gt;
            &lt;p class="cim display-4"&gt;The Best&lt;/p&gt; 
            &lt;p class="cim fw-bold display-4"&gt;Private Office Experience, Luxury in the City.&lt;/p&gt;
            &lt;p class="cim green fw-bold display-4"&gt;GlobalSpaces&lt;/p&gt;
            &lt;p class="d-none d-lg-block lead"&gt;
                GlobalSpaces brings you the magic of premium private office experiences!
                We all know the chaos that comes with crowded co-working spaces and the hassle of finding suitable meeting rooms – endless hours spent on bookings, logistics, and compromises.
                Why not choose complete freedom and comfort instead?
                Enjoy your own private office space with your team, clients, or partners – the true meaning of professional productivity and peace of mind.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class="col-12 col-md-6"&gt;
            &lt;img src="/assets/office1.jpg" class="img-fluid" alt="Office Space 1"&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="row my-5"&gt;
        &lt;div class="col-12 col-md-6 order-2 order-md-1"&gt;
            &lt;img src="/assets/office2.jpg" class="img-fluid" alt="Office Space 2"&gt;
        &lt;/div&gt;
        &lt;div class="box col-12 col-md-6 order-1"&gt;
            &lt;h2&gt;About Us&lt;/h2&gt;
            &lt;h5&gt;GlobalSpaces – Redefining Office Rentals&lt;/h5&gt;
            &lt;p class="lead"&gt;
                GlobalSpaces embodies modern luxury and flexibility in workspace solutions.
                Our network features meticulously selected, world-class office spaces, offering the perfect environment for daily work, corporate events, client meetings, or project collaborations.
                Whether you're looking for a short-term spot or a long-term base, you'll find the ideal office with us – complete with personalized services, premium facilities, and professional support.
                Experience unlimited productivity and maximum comfort with GlobalSpaces.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="row my-5"&gt;
        &lt;div class="box col-12 col-md-6"&gt;
            &lt;h2&gt;Offices&lt;/h2&gt;
            &lt;h5&gt;The World's Finest Offices for Your Perfect Workdays&lt;/h5&gt;
            &lt;p class="lead"&gt;
                Our collection of office spaces perfectly blends modern design and professional elegance.
                Whether you seek sleek private offices, dynamic co-working areas, or prestigious corporate suites – we offer a wide selection to meet every business need.
                Our offices feature the latest technology, spacious workstations, meeting rooms, relaxation zones, and premium amenities.
                Let our expert team help you find the perfect office space to make every workday truly exceptional!
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class="col-12 col-md-6"&gt;
            &lt;img src="/assets/office3.png" class="img-fluid" alt="Office Space 3"&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><br>
<p>
<h2>Weboldal 2</h2>
Link:https://drive.google.com/file/d/1r4YmNqfXmEAOKbgMdapn8YD9tt9CRQ96/view?usp=sharing<br>
Főlink:https://drive.google.com/drive/folders/1DlgW65MCmiBZ3KYmx0BeVt1SvmKJjXB2?usp=sharing<br>
`,
 Minden: `
    <h2>Az egész egyben</h2><br>
Link:https://drive.google.com/drive/folders/1aiSUmTueGeR3hGmxR3YIXU2uTal8yOcN?usp=sharing<br>
Link 2:https://www.dropbox.com/scl/fo/qqir2zfxp9nxcz239oq9g/AJ2-P8BYgfejmQ6hHDFj53Q?rlkey=xqwqi0bqmlvx07pua3ucf0s95&st=voxwwk06&dl=0<br>


    <h2>Weboldal</h2><br>

Az or <br>

1. Létre kell hozni egy új mappát aminek lehet bármi a neve <br>

2. Itt írni kell egy cmd-t és nyitni kell egy visual studio code-t<br>

3. A projektben egy img mappa létrehozása kell hogy bele tudjuk tenni a képeket <br>

4. Létrehozunk egy index.html-t ami így néz ki <br>

&lt;!DOCTYPE html&gt;<br>
&lt;html lang="hu"&gt;<br>
&lt;head&gt;<br>
  &lt;meta charset="UTF-8"&gt;<br>
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;<br>
  &lt;title&gt;Iroda Bérlés&lt;/title&gt;<br>
  &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"&gt;<br>
  &lt;link rel="stylesheet" href="style.css"&gt;<br>
&lt;/head&gt;<br>
&lt;body&gt;<br>
<br>
&lt;!-- NAVBAR --&gt;<br>
&lt;nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2"&gt;<br>
  &lt;a class="navbar-brand text-success fw-bold" href="#"&gt;Office Sphere&lt;/a&gt;<br>
  &lt;button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"&gt;<br>
    &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;<br>
  &lt;/button&gt;<br>
  &lt;div class="collapse navbar-collapse justify-content-between" id="navbarNav"&gt;<br>
    &lt;ul class="navbar-nav"&gt;<br>
      &lt;li class="nav-item"&gt;&lt;a class="nav-link text-white" href="#"&gt;Rent Office&lt;/a&gt;&lt;/li&gt;<br>
    &lt;/ul&gt;<br>
    &lt;form class="d-flex mt-3 mt-lg-0" role="search"&gt;<br>
      &lt;input class="form-control me-2" type="search" placeholder="Search"&gt;<br>
      &lt;button class="btn btn-outline-success" type="submit"&gt;Search&lt;/button&gt;<br>
    &lt;/form&gt;<br>
  &lt;/div&gt;<br>
&lt;/nav&gt;<br>
<br>
&lt;!-- HEADER --&gt;<br>
&lt;header class="container mt-5"&gt;<br>
  &lt;div class="row align-items-center"&gt;<br>
    &lt;div class="col-lg-6"&gt;<br>
      &lt;h1 class="display-5 fw-light"&gt;The Best &lt;br&gt;<br>
        &lt;span class="fw-bold"&gt;Private Office Experience, Luxury in the City.&lt;/span&gt;&lt;br&gt;<br>
        &lt;span class="text-success fw-bold"&gt;GlobalSpaces&lt;/span&gt;<br>
      &lt;/h1&gt;<br>
      &lt;p class="mt-3"&gt;GlobalSpaces brings you the magic of premium private office experiences! We all know the chaos that comes with crowded co-working spaces and the hassle of finding suitable meeting rooms – endless hours spent on bookings, logistics, and compromises. Why not choose complete freedom and comfort instead? Enjoy your own private office space with your team, clients, or partners – the true meaning of professional productivity and peace of mind.&lt;/p&gt;<br>
    &lt;/div&gt;<br>
    &lt;div class="col-lg-6"&gt;<br>
      &lt;img src="img/office1.jpg" class="img-fluid  shadow" alt="Office"&gt;<br>
    &lt;/div&gt;<br>
  &lt;/div&gt;<br>
&lt;/header&gt;<br>
<br>
&lt;!-- SECTION 1 --&gt;<br>
&lt;section class="container mt-5"&gt;<br>
  &lt;div class="row align-items-center flex-column flex-md-row mb-5"&gt;<br>
    &lt;div class="col-md-6"&gt;<br>
      &lt;img src="img/office2.jpg" class="img-fluid shadow" alt="Office 2"&gt;<br>
    &lt;/div&gt;<br>
    &lt;div class="col-md-6 mt-4 mt-md-0 ps-md-5"&gt;<br>
      &lt;h2&gt;&lt;span class="text-success display-6 fw-bold"&gt;A&lt;/span&gt;bout Us&lt;/h2&gt;<br>
      &lt;p&gt;GlobalSpaces embodies modern luxury and flexibility in workspace solutions. Our network features meticulously selected, world-class office spaces, offering the perfect environment for daily work, corporate events, client meetings, or project collaborations. Whether you're looking for a short-term spot or a long-term base, you'll find the ideal office with us – complete with personalized services, premium facilities, and professional support. Experience unlimited productivity and maximum comfort with GlobalSpaces.&lt;/p&gt;<br>
    &lt;/div&gt;<br>
  &lt;/div&gt;<br>
<br>
  &lt;!-- SECTION 2 --&gt;<br>
  &lt;div class="row align-items-center flex-column-reverse flex-md-row"&gt;<br>
    &lt;div class="col-md-6 mt-4 mt-md-0 pe-md-5"&gt;<br>
      &lt;h2&gt;&lt;span class="text-success display-6 fw-bold"&gt;O&lt;/span&gt;ffices&lt;/h2&gt;<br>
      &lt;p&gt;The World's Finest Offices for Your Perfect Workdays<br>
Our collection of office spaces perfectly blends modern design and professional elegance. Whether you seek sleek private offices, dynamic co-working areas, or prestigious corporate suites – we offer a wide selection to meet every business need. Our offices feature the latest technology, spacious workstations, meeting rooms, relaxation zones, and premium amenities. Let our expert team help you find the perfect office space to make every workday truly exceptional!&lt;/p&gt;<br>
    &lt;/div&gt;<br>
    &lt;div class="col-md-6"&gt;<br>
      &lt;img src="img/office3.png" class="img-fluid  shadow" alt="Office 3"&gt;<br>
    &lt;/div&gt;<br>
  &lt;/div&gt;<br>
&lt;/section&gt;<br>
<br>
&lt;!-- FOOTER --&gt;<br>
&lt;footer class="bg-dark text-white text-center py-3 mt-5"&gt;<br>
  &amp;copy; 2025 Office Sphere – All rights reserved.<br>
&lt;/footer&gt;<br>
<br>
&lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;<br>
&lt;/body&gt;<br>
&lt;/html&gt;<br>
<br>
<p>
5. És létrehozunk egy styles.css-t ami így néz ki <br>
<p>
&lt;!-- Egyéni stílusok --&gt;<br>
&lt;style&gt;<br>
.bg-green {<br>
  background-color: rgb(114, 221, 120) !important;<br>
}<br>
.navbar-brand {<br>
  font-weight: bold;<br>
}<br>
h1, h2 {<br>
  color: rgb(40, 40, 40);<br>
}<br>
.text-success {<br>
  color: rgb(114, 221, 120) !important;<br>
}<br>
&lt;/style&gt;<br>

<h2>DESKTOP</h2>
Az or<br>
<br>
1. A létrehozáshoz két verzió lehetséges. Amikor a console alkalmazást használva tovább fejlesztjük és lesz egy desktopos alkalmazás is pluszba VAGY <br>
ha teljesen egy új projektet generálunk.<br>
<br>
2. Ha újjat generálunk akkor egy visual studio nyitása és create new project <br>
<br>
3. A Windows Forms App kiválasztása és utánna egy névadás után create és fontos hogy csak .net 8.0-as verzió legyen<br>
<br>
4. Mikor megtörténik a kreálás egy teljesen üres oldal jelenik meg amin van egy bezár, nagyobb képernyő és kisebb képernyő gomb<br>
<br>
5. Jobb egérrel ha rákattintasz megjelenik egy view code gomb vagy ha az f7 billentyű leütésére is megjelnik az oldal<br>
<br>
6. Ez a form1.cs ahova lehet beleírni a kódokat hogy nézzen ki maga az ablak amibe ezt kell írni <br>
<br>
-----------------------------------------------------<br>
<br>
using System;<br>
using System.Collections.Generic;<br>
using System.IO;<br>
using System.Linq;<br>
using System.Windows.Forms;<br>
<br>
namespace OfficesDesktop<br>
{<br>
    public partial class Form1 : Form<br>
    {<br>
        private DataGridView dgv;<br>
        private TextBox txtOfficeName;<br>
        private DateTimePicker dtpDate;<br>
        private ComboBox cmbCategory;<br>
        private NumericUpDown nudAmount;<br>
        private TextBox txtNote;<br>
        private Button btnAdd;<br>
<br>
        private List<OfficeCost> officeCosts = new List<OfficeCost>();<br>
        private string filePath = "office_costs_2024.csv";<br>
<br>
        public Form1()<br>
        {<br>
            InitializeComponent();<br>
            InitializeFormElements();<br>
            LoadCsv();<br>
            RefreshGrid();<br>
        }<br>
<br>
        private void InitializeFormElements()<br>
        {<br>
            this.Text = "Office Cost Manager";<br>
            this.Width = 900;<br>
            this.Height = 600;<br>
<br>
            dgv = new DataGridView<br>
            {<br>
                Location = new System.Drawing.Point(10, 10),<br>
                Width = 860,<br>
                Height = 300,<br>
                AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.Fill<br>
            };<br>
            this.Controls.Add(dgv);<br>
<br>
            Label lblOffice = new Label { Text = "Office Name:", Location = new System.Drawing.Point(10, 320) };<br>
            txtOfficeName = new TextBox { Location = new System.Drawing.Point(120, 320), Width = 200 };<br>
<br>
            Label lblDate = new Label { Text = "Date:", Location = new System.Drawing.Point(10, 360) };<br>
            dtpDate = new DateTimePicker { Location = new System.Drawing.Point(120, 360), Width = 200 };<br>
<br>
            Label lblCategory = new Label { Text = "Category:", Location = new System.Drawing.Point(10, 400) };<br>
            cmbCategory = new ComboBox { Location = new System.Drawing.Point(120, 400), Width = 200 };<br>
            cmbCategory.Items.AddRange(new string[] { "Maintenance", "Repairs", "Insurance", "Cleaning", "Utilities", "Other" });<br>
            cmbCategory.SelectedIndex = 0;<br>
<br>
            Label lblAmount = new Label { Text = "Amount (EUR):", Location = new System.Drawing.Point(10, 440) };<br>
            nudAmount = new NumericUpDown { Location = new System.Drawing.Point(120, 440), Width = 200, Maximum = 1000000, DecimalPlaces = 2 };<br>
<br>
            Label lblNote = new Label { Text = "Note:", Location = new System.Drawing.Point(10, 480) };<br>
            txtNote = new TextBox { Location = new System.Drawing.Point(120, 480), Width = 200 };<br>
<br>
            btnAdd = new Button { Text = "Add", Location = new System.Drawing.Point(350, 440), Width = 100 };<br>
            btnAdd.Click += BtnAdd_Click;<br>
<br>
            this.Controls.Add(lblOffice);<br>
            this.Controls.Add(txtOfficeName);<br>
            this.Controls.Add(lblDate);<br>
            this.Controls.Add(dtpDate);<br>
            this.Controls.Add(lblCategory);<br>
            this.Controls.Add(cmbCategory);<br>
            this.Controls.Add(lblAmount);<br>
            this.Controls.Add(nudAmount);<br>
            this.Controls.Add(lblNote);<br>
            this.Controls.Add(txtNote);<br>
            this.Controls.Add(btnAdd);<br>
        }<br>
<br>
        private void LoadCsv()<br>
        {<br>
            if (!File.Exists(filePath))<br>
                return;<br>
<br>
            var lines = File.ReadAllLines(filePath);<br>
            foreach (var line in lines.Skip(1))<br>
            {<br>
                var parts = line.Split(';');<br>
                officeCosts.Add(new OfficeCost<br>
                {<br>
                    Id = int.Parse(parts[0]),<br>
                    OfficeName = parts[1],<br>
                    Date = DateTime.Parse(parts[2]),<br>
                    Category = parts[3],<br>
                    Amount = decimal.Parse(parts[4]),<br>
                    Note = parts[5]<br>
                });<br>
            }<br>
        }<br>
<br>
        private void SaveCsv()<br>
        {<br>
            var lines = new List<string> { "id;officename;datum;kategoria;osszeg;megjegyzes" };<br>
            lines.AddRange(officeCosts.Select(x => $"{x.Id};{x.OfficeName};{x.Date:yyyy-MM-dd};{x.Category};{x.Amount};{x.Note}"));<br>
            File.WriteAllLines(filePath, lines);<br>
        }<br>
<br>
        private void RefreshGrid()<br>
        {<br>
            dgv.DataSource = null;<br>
            dgv.DataSource = officeCosts;<br>
        }<br>
<br>
        private void BtnAdd_Click(object sender, EventArgs e)<br>
        {<br>
            int nextId = officeCosts.Any() ? officeCosts.Max(x => x.Id) + 1 : 1;<br>
            var newCost = new OfficeCost<br>
            {<br>
                Id = nextId,<br>
                OfficeName = txtOfficeName.Text,<br>
                Date = dtpDate.Value,<br>
                Category = cmbCategory.SelectedItem.ToString(),<br>
                Amount = nudAmount.Value,<br>
                Note = txtNote.Text<br>
            };<br>
<br>
            officeCosts.Add(newCost);<br>
            SaveCsv();<br>
            RefreshGrid();<br>
<br>
            txtOfficeName.Clear();<br>
            nudAmount.Value = 0;<br>
            txtNote.Clear();<br>
            cmbCategory.SelectedIndex = 0;<br>
            dtpDate.Value = DateTime.Now;<br>
        }<br>
    }<br>
<br>
    public class OfficeCost<br>
    {<br>
        public int Id { get; set; }<br>
        public string OfficeName { get; set; }<br>
        public DateTime Date { get; set; }<br>
        public string Category { get; set; }<br>
        public decimal Amount { get; set; }<br>
        public string Note { get; set; }<br>
    }<br>
}<br>
<br>

------------------------------------------------------<br>
<br>
7. Az office_costs_2024 filet be kell ilelszteni a projektbe a többi file mellé a program.cs fölé vagy végülis mind1 csak a többi mellé<br>
<br>
7/1. Amikor megtörtént a beillesztés akkor a .csv properitest meg kell nyitni amit vagy a Soulution Exploirer alatt lévő kulcsra kattintva ellehet érni vagy jobb egér gomb a <br>
.csv-re és akkor legalul rálehet menni a properites-re<br>
<br>
7/2. A properites megjelenik és a Build Action-t Contentre kell állítani és a Copy to Output Drictory-t meg Copy if newer-re<br>
<br>
8. Ha lefut akkor minden ok <br>

!!!!!!!!!!!!!!!!!!!!!!!<br>

Ha hozzákreáljuk a meglévő consoloe alkalmazáshoz akkor <br>
<br>
!!!!!!!!!!!!!!!!!!!!!!!<br>
<br>
1. A Solution "OfficesConsole" (1 of 1) project-re kattintva jobb egér gombbal az add - new project megnyomásával kreálunk egy új projektet és az előző lehetőségben <br>
megmutattott módon kreálunk egy projektet<br>
<br>
2. Itt csak az a fontos hogy mindent az adott projekt fejlesztéséhez szánt terültre illeszünk <br>
<br>
3. Ennyi<br>

<h2>Api</h2>
Az or <br>
<br>
1. A visual studio megnyitása után egy új projekt generálása<br>
<br>
2. Itt egy ASP.NET Core Web Api kiválasztása <br>
<br>
3. A projekt neve ebben az estben OfficesAPI és amikor tovább lépsz egy .NET 8.0 verzió választása <br>
<br>
4. Itt a https kiválasztása és a openapi support és do not use top level mellett a use controllers kiválasztása és kreálás<br>
<br>
5. Amikor megjelenik a projekt akkor a weatherforecast.cs törlése <br>
<br>
6. A controllers mappén belül is a weatherforecast.controller.cs törlése<br>
<br>
7. Az OfficesAPI-ra kattintás és aztán egy új Models mappa hozzáadása <br>
<br>
7/1. A models mappán belül egy Berles osztály létrehozása hogy jobb egérgombal a Models-re kattintasz és add és class-ra kattintva <br>
<br>
7/2. A Berles.cs-be ezt kell írni<br>
<br>
---------------------------------------------------<br>
<br>
﻿using System.ComponentModel.DataAnnotations.Schema;<br>
<br>
namespace OfficesAPI.Models<br>
{<br>
    public class Berles<br>
    {<br>
        public int Id { get; set; }<br>
<br>
        public int Uid { get; set; }<br>
<br>
        public int OfficeId { get; set; }<br>
<br>
        public DateTime StartDate { get; set; }<br>
<br>
        public DateTime EndDate { get; set; }<br>
<br>
        public int DailyRate { get; set; }<br>
<br>
<br>
        public int BaseFee { get; set; }<br>
<br>
        [NotMapped]<br>
        public int TotalPrice<br>
        {<br>
            get<br>
            {<br>
                int napok = (EndDate - StartDate).Days + 1;<br>
                return BaseFee + (napok * DailyRate);<br>
            }<br>
        }<br>
<br>
    }<br>
}<br>


-----------------------------------------------------<br>
<br>
8. A controllers mappára kattintva egy add és azon belül newscaffoldeditem-re kattintva egy API Controller with actions, using Entity Framework-re kattintva <br>
<br>
8/1. Megjelenik egy fül amiben a Model classon belül a Berles-t kell választani<br>
<br>
8/2. A dbcontext class-nál egy + jelre kattintva megjelnik egy ablak ott az add-ot kell megnyomni <br>
<br>
8/3. A controllerName itt a BerlesController HELYETT BerlesekController kell legyen és ez után egy Add gomb megnyomása<br>
<br>
9. Miután megtörtént a Scaffolded itemezés a generált BerlesekController.cs-en belül így kell hogy kinézzen<br>
------------------------------------<br>
﻿using System;<br>
using System.Collections.Generic;<br>
using System.Linq;<br>
using System.Threading.Tasks;<br>
using Microsoft.AspNetCore.Http;<br>
using Microsoft.AspNetCore.Mvc;<br>
using Microsoft.EntityFrameworkCore;<br>
using OfficesAPI.Data;<br>
using OfficesAPI.Models;<br>
<br>
namespace OfficesAPI.Controllers<br>
{<br>
    [Route("api/[controller]")]<br>
    [ApiController]<br>
    public class BerlesekController : ControllerBase<br>
    {<br>
        private readonly OfficesAPIContext _context;<br>
<br>
        public BerlesekController(OfficesAPIContext context)<br>
        {<br>
            _context = context;<br>
        }<br>
<br>
        // GET: api/Berlesek<br>
        [HttpGet]<br>
        public async Task<ActionResult<IEnumerable<Berles>>> GetBerles()<br>
        {<br>
            return await _context.Berles.ToListAsync();<br>
        }<br>
<br>
        // GET: api/Berlesek/5<br>
        [HttpGet("{id}")]<br>
        public async Task<ActionResult<Berles>> GetBerles(int id)<br>
        {<br>
            var berles = await _context.Berles.FindAsync(id);<br>
<br>
            if (berles == null)<br>
            {<br>
                return NotFound();<br>
            }<br>
<br>
            return berles;<br>
        }<br>

        //// PUT: api/Berlesek/5<br>
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754<br>
        //[HttpPut("{id}")]<br>
        //public async Task<IActionResult> PutBerles(int id, Berles berles)<br>
        //{<br>
        //    if (id != berles.Id)<br>
        //    {<br>
        //        return BadRequest();<br>
        //    }<br>
<br>
        //    _context.Entry(berles).State = EntityState.Modified;<br>
<br>
        //    try<br>
        //    {<br>
        //        await _context.SaveChangesAsync();<br>
        //    }<br>
        //    catch (DbUpdateConcurrencyException)<br>
        //    {<br>
        //        if (!BerlesExists(id))<br>
        //        {<br>
        //            return NotFound();<br>
        //        }<br>
        //        else<br>
        //        {<br>
        //            throw;<br>
        //        }<br>
        //    }<br>
<br>
        //    return NoContent();<br>
        //}<br>
<br>
        // POST: api/Berlesek<br>
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754<br>
        [HttpPost]<br>
        public async Task<ActionResult<Berles>> PostBerles(Berles berles)<br>
        {<br>
            // A bérlés kezdete nem lehet korábbi, mint holnap<br>
            if (berles.StartDate.Date < DateTime.Today.AddDays(1))<br>
            {<br>
                return BadRequest("The office rental can start no earlier than tomorrow.");<br>
            }<br>
<br>
            // Legalább 5 napos bérlés<br>
            var napok = (berles.EndDate - berles.StartDate).TotalDays + 1;<br>
            if (napok < 5)<br>
            {<br>
                return BadRequest("The minimum office rental period is 5 days.");<br>
            }<br>
<br>
            // Legfeljebb 90 napos bérlés<br>
            if (napok > 90)<br>
            {<br>
                return BadRequest("The maximum office rental period is 90 days.");<br>
            }<br>
<br>
            // Átfedés ellenőrzése ugyanarra az irodára<br>
            bool overlapExists = await _context.Berles.AnyAsync(b =><br>
                b.OfficeId == berles.OfficeId &&<br>
                !(berles.EndDate <= b.StartDate || berles.StartDate >= b.EndDate)<br>
            );<br>
<br>
            if (overlapExists)<br>
            {<br>
                return BadRequest("The selected office is already booked during the specified period.");<br>
            }<br>
<br>
            _context.Berles.Add(berles);<br>
            await _context.SaveChangesAsync();<br>
<br>
            return CreatedAtAction("GetBerles", new { id = berles.Id }, berles);<br>
        }<br>
<br>
        // DELETE: api/Berlesek/5<br>
        [HttpDelete("{id}")]<br>
        public async Task<IActionResult> DeleteBerles(int id)<br>
        {<br>
            var berles = await _context.Berles.FindAsync(id);<br>
            if (berles == null)<br>
            {<br>
                return NotFound();<br>
            }<br>
<br>
            _context.Berles.Remove(berles);<br>
            await _context.SaveChangesAsync();<br>
<br>
            return NoContent();<br>
        }<br>
<br>
        private bool BerlesExists(int id)<br>
        {<br>
            return _context.Berles.Any(e => e.Id == id);<br>
        }<br>
    }<br>
}<br>
---------------------------------------------<br>
<br>
10. Miután megtörtént a bemásolás kell egy build és aztán egy NugetPackageManager console-t kell nyitni amit a tools menüben a NugetPackageManager menüben lehet elérni<br>
<br>
11. FONTOS Hogy fent a projekt futtatása az aktulis projektre legyen állíva ez esetben az OfficesAPI-ra és lent is PackageManager Debug Consolján a Default Project <br>
legyen az aktuális projektre állítva<br>
<br>
12. A NugetPackageManager Console-ba ezt kell beírni Add-Migration Initial<br>
<br>
13. Miután lefutott ugyanoda egy Update-Database parancsot kell kiadni <br>
<br>
14. Miután az is lefutott a Program.cs-be be kell írni pár sort de így kell hogy véglegesen kinézzen <br>
<br>
------------------------------------------<br>
<br>
using Microsoft.EntityFrameworkCore;<br>
using Microsoft.Extensions.DependencyInjection;<br>
using OfficesAPI.Data;<br>
<br>
namespace OfficesAPI<br>
{<br>
    public class Program<br>
    {<br>
        public static void Main(string[] args)<br>
        {<br>
            var builder = WebApplication.CreateBuilder(args);<br>
            builder.Services.AddDbContext<OfficesAPIContext>(options =><br>
                options.UseSqlServer(builder.Configuration.GetConnectionString("OfficesAPIContext") ?? throw new InvalidOperationException("Connection string 'OfficesAPIContext' not found.")));<br>
<br>
            // Add services to the container.<br>
<br>
            builder.Services.AddControllers();<br>
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle<br>
            builder.Services.AddEndpointsApiExplorer();<br>
            builder.Services.AddSwaggerGen();<br>
<br>
            var app = builder.Build();<br>
<br>
            // Configure the HTTP request pipeline.<br>
            if (app.Environment.IsDevelopment())<br>
            {<br>
                app.UseSwagger();<br>
                app.UseSwaggerUI();<br>
            }<br>
<br>
            app.UseCors(builder => builder<br>
                    .AllowAnyHeader()<br>
                    .AllowAnyMethod()<br>
                    .AllowAnyOrigin()<br>
                    );<br>
<br>
            app.UseHttpsRedirection();<br>
<br>
            app.UseAuthorization();<br>
<br>
<br>
            app.MapControllers();<br>
<br>
            app.Run();<br>
        }<br>
    }<br>
}<br>
<br>
<br>
----------------------------------------------<br>
<br>
15. Mikor megtörtént az átírás akkor már lehet is tesztelni hogy működik <br>
<br>
<p>
<h2>Console 1 csv</h2>
Az or<br>
<br>
1. Microsoft Visual Studio nyitása<br>
<br>
2. Create New Project gombra kattintva átirányít hogy kiválaszd a projektet<br>
<br>
3. A sima console app választása NEM A .NET-ES VERZIÓ<br>
<br>
4. ProjectName akármi de ebben az esetben OfficeRentalApp<br>
<br>
5. Utánna a next gomb megnyomására megjelenik a Framework ami .8.0 legyen és a Do Not use top-level statements bejelülése (kipipálása)<br>
<br>
6. Create<br>
<br>
7. Miután kreálódott a projekt egy új osztályt kell létrehozni ami ez esetben a berles<br>
<br>
7/1. A program.cs alatti üres rész jobb egérgomb és .add azon belül a .class <br>
<br>
7/2. A bérlés classon belül ezt kell írni<br>
<br>
--------------------------------------------------------------<br>
<br>
using System;<br>
using System.Collections.Generic;<br>
using System.Globalization;<br>
using System.IO;<br>
using System.Linq;<br>
<br>
public class Berles<br>
{<br>
    public int Uid { get; set; }<br>
    public int OfficeId { get; set; }<br>
    public DateTime StartDate { get; set; }<br>
    public DateTime EndDate { get; set; }<br>
    public int DailyRate { get; set; }<br>
    public int BaseFee { get; set; }<br>
    public string Name { get; set; }<br>
<br>
    // Konstruktor<br>
    public Berles(string line)<br>
    {<br>
        string[] row = line.Split(",");<br>
        Uid = int.Parse(row[0]);<br>
        OfficeId = int.Parse(row[1]);<br>
        StartDate = DateTime.ParseExact(row[2], "yyyy-MM-dd", CultureInfo.InvariantCulture);<br>
        EndDate = DateTime.ParseExact(row[3], "yyyy-MM-dd", CultureInfo.InvariantCulture);<br>
        DailyRate = int.Parse(row[4]);<br>
        BaseFee = int.Parse(row[5]);<br>
        Name = row[6];<br>
    }<br>
<br>
    // Számított tulajdonság: TotalPrice<br>
    public int TotalPrice<br>
    {<br>
        get<br>
        {<br>
            var days = (int)(EndDate - StartDate).TotalDays;<br>
            return days * DailyRate;<br>
        }<br>
    }<br>
}<br>
<br>
<br>
<br>
-----------------------------------------------------------------<br>
<br>
<br>
<br>
8. Utánna a program.cs-be ezt kell írni <br>
<br>
----------------------------------------------------------<br>
<br>
using System;<br>
using System.Collections.Generic;<br>
using System.IO;<br>
using System.Linq;<br>
<br>
class Program<br>
{<br>
    static void Main(string[] args)<br>
    {<br>
        var berlesek = new List<Berles>();<br>
<br>
        // Fájl beolvasása<br>
        foreach (var item in File.ReadAllLines("office_rentals_2024.csv").Skip(1))<br>
        {<br>
            berlesek.Add(new Berles(item));<br>
        }<br>
<br>
        // 2. feladat: Havi bevétel kiszámítása<br>
        Console.Write("Kérem adjon meg egy hónapot (1-12): ");<br>
        int month = int.Parse(Console.ReadLine());<br>
        var monthlyRevenue = CalculateMonthlyRevenue(berlesek, month);<br>
        Console.WriteLine($"A havi bevétel: {monthlyRevenue:n0} euró");<br>
<br>
        // 3. feladat: Teljes éves bevétel<br>
        var totalRevenue = CalculateTotalRevenue(berlesek);<br>
        Console.WriteLine($"A teljes éves bevétel: {totalRevenue:n0} euró");<br>
<br>
        // 4. feladat: Legdrágább bérlés<br>
        var mostExpensiveRental = FindMostExpensiveRental(berlesek);<br>
        Console.WriteLine($"A legdrágább bérlés ára: {mostExpensiveRental.TotalPrice:n0} euró");<br>
<br>
        // 5. feladat: Bérelhető irodák számának meghatározása<br>
        var distinctOfficesCount = CountDistinctOffices(berlesek);<br>
        Console.WriteLine($"Különböző irodák száma: {distinctOfficesCount}");<br>
<br>
        // 6. feladat: A leggyakrabban bérelt iroda<br>
        var mostRentedOffice = FindMostRentedOffice(berlesek);<br>
        Console.WriteLine($"A leggyakrabban bérelt iroda: {mostRentedOffice.Name}, {mostRentedOffice.Count} bérlés");<br>
<br>
        // 7. feladat: Bérlések száma helyszínenként<br>
        Console.WriteLine("Bérlések helyszínenként:");<br>
        GroupByLocation(berlesek);<br>
<br>
        // 8. feladat: Átlagos bérlési időtartam<br>
        var avgDuration = CalculateAverageRentalDuration(berlesek);<br>
        Console.WriteLine($"Az átlagos bérlési időtartam: {avgDuration:F2} nap");<br>
    }<br>
<br>
    public static long CalculateMonthlyRevenue(List<Berles> berlesek, int month)<br>
    {<br>
        // Kiszedjük azokat a bérléseket, amikben a hónap bármelyik napján voltak<br>
        var revenue = berlesek<br>
            .Where(b => (b.StartDate.Month <= month && b.EndDate.Month >= month)) // Ha a bérlés akár részben is esik a hónapra<br>
            .Sum(b => b.TotalPrice); // Összeadjuk a bérlések teljes árait<br>
        return revenue;<br>
    }<br>
<br>
    public static long CalculateTotalRevenue(List<Berles> berlesek)<br>
    {<br>
        var totalRevenue = berlesek.Sum(b => b.TotalPrice); // Összesíti az összes bérlés árát<br>
        return totalRevenue;<br>
    }<br>
<br>
<br>
    public static Berles FindMostExpensiveRental(List<Berles> berlesek)<br>
    {<br>
        var mostExpensive = berlesek<br>
            .OrderByDescending(b => b.TotalPrice) // Csökkenő sorrendben rendezzük a bérléseket<br>
            .FirstOrDefault(); // Visszaadjuk a legdrágább bérlést<br>
        return mostExpensive;<br>
    }<br>
<br>
<br>
    public static int CountDistinctOffices(List<Berles> berlesek)<br>
    {<br>
        var distinctOfficesCount = berlesek.Select(b => b.OfficeId).Distinct().Count(); // Különböző OfficeId-k száma<br>
        return distinctOfficesCount;<br>
    }<br>
<br>
    public static (string Name, int Count) FindMostRentedOffice(List<Berles> berlesek)<br>
    {<br>
        var mostRentedOffice = berlesek<br>
            .GroupBy(b => b.Name)  // A helyszínek (irodák) alapján csoportosítunk<br>
            .OrderByDescending(g => g.Count())  // Csökkenő sorrendben rendezzük, hogy a legtöbbször bérelt iroda kerüljön előre<br>
            .FirstOrDefault();<br>
<br>
        // Ha van adat, visszaadjuk a leggyakrabban bérelt iroda nevét és a bérlések számát<br>
        return mostRentedOffice != null ? (mostRentedOffice.Key, mostRentedOffice.Count()) : ("Nincs adat", 0);<br>
    }<br>
<br>
<br>
    public static void GroupByLocation(List<Berles> berlesek)<br>
    {<br>
        var bookingsByLocation = berlesek<br>
            .GroupBy(b => b.Name)  // A helyszínek (irodák) alapján csoportosítunk<br>
            .ToList();<br>
<br>
        foreach (var locationGroup in bookingsByLocation)<br>
        {<br>
            Console.WriteLine($"{locationGroup.Key}: {locationGroup.Count()} bérlés");<br>
        }<br>
    }<br>
<br>
    public static double CalculateAverageRentalDuration(List<Berles> berlesek)<br>
    {<br>
        // Átlagos bérlési időtartam napokban (StartDate és EndDate közötti különbség + 1, hogy az első nap is számítson)<br>
        var averageDuration = berlesek<br>
            .Select(b => (b.EndDate - b.StartDate).Days + 1)  // +1, hogy az első nap is beleszámítson<br>
            .Average();  // Átlagot számolunk<br>
        return averageDuration;<br>
    }<br>
<br>
<br>
}<br>
<br>
<br>
----------------------------------------------------------------------<br>
<br>
<br>
9. A .csv filet 2 helyre lehet tenni. Az egyik ha közvetlenül csak simán bedobod a program.cs és a berles.cs fileok közé. Vagy ha ezen az elérési útvonalon beírod C:\valami\valami\source\repos\OfficeRentals\OfficeRentals\bin\Debug\net8.0<br>
<br>
<br>
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<br>
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<br>
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<br>
<br>
NEM BIZTOS HOGY TÖKÉLETES A MEGOLDÁS<br>
<br>
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<br>
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<br>
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<br>
<br>
<br>
<br>
Az or<br>
<br>
1. Microsoft Visual Studio nyitása <br>
<br>
2. Create New Project gombra kattintva átirányít hogy kiválaszd a projektet<br>
<br>
3. A sima console app választása NEM A .NET-ES VERZIÓ<br>
<br>
4. ProjectName akármi de ebben az esetben OfficeRentalApp<br>
<br>
5. Utánna a next gomb megnyomására megjelenik a Framework ami .8.0 legyen és a Do Not use top-level statements bejelülése (kipipálása)<br>
<br>
6. Create<br>
<br>
7. Miután kreálódott a projekt egy új osztályt kell létrehozni ami ez esetben amit a program.csben csinálunk csak<br>
<br>
8. Ezt kell beleíni<br>
<br>
--------------------------------------------------------------<br>
<br>
﻿using System;<br>
using System.Collections.Generic;<br>
using System.Globalization;<br>
using System.IO;<br>
using System.Linq;<br>
<br>
namespace RentOffices<br>
{<br>
    public class Berles<br>
    {<br>
        public int Uid { get; set; }<br>
        public int OfficeId { get; set; }<br>
        public DateTime StartDate { get; set; }<br>
        public DateTime EndDate { get; set; }<br>
        public int DailyRate { get; set; }<br>
        public string Name { get; set; }<br>
        public string City { get; set; }<br>
<br>
        public int TotalPrice<br>
        {<br>
            get<br>
            {<br>
                int days = (EndDate - StartDate).Days + 1;<br>
                return DailyRate * days;<br>
            }<br>
        }<br>
    }<br>
<br>
    class Program<br>
    {<br>
        static void Main(string[] args)<br>
        {<br>
            var berlesek = new List<Berles>();<br>
            var lines = File.ReadAllLines("office_rentals_2024.csv");<br>
            for (int i = 1; i < lines.Length; i++)<br>
            {<br>
                var parts = lines[i].Split(',');<br>
                berlesek.Add(new Berles<br>
                {<br>
                    Uid = int.Parse(parts[0]),<br>
                    OfficeId = int.Parse(parts[1]),<br>
                    StartDate = DateTime.ParseExact(parts[2], "yyyy-MM-dd", CultureInfo.InvariantCulture),<br>
                    EndDate = DateTime.ParseExact(parts[3], "yyyy-MM-dd", CultureInfo.InvariantCulture),<br>
                    DailyRate = int.Parse(parts[4]),<br>
                    Name = parts[5],<br>
                    City = parts[6]<br>
                });<br>
            }<br>
<br>
            Console.Write("Adjon meg egy hónapot (1-12): ");<br>
            int honap = int.Parse(Console.ReadLine());<br>
<br>
            int haviBevetel = berlesek<br>
                .Where(b => b.StartDate.Month == honap || b.EndDate.Month == honap || (b.StartDate.Month < honap && b.EndDate.Month > honap))<br>
                .Sum(b => b.TotalPrice);<br>
<br>
            Console.WriteLine($"A(z) {honap}. hónap bevétele: {haviBevetel:N0} euró");<br>
<br>
            int evesBevetel = berlesek.Sum(b => b.TotalPrice);<br>
            Console.WriteLine($"A teljes 2024-es éves bevétel: {evesBevetel:N0} euró");<br>
<br>
            var legdragabb = berlesek.OrderByDescending(b => b.TotalPrice).First();<br>
            Console.WriteLine($"A legdrágább bérlés az {legdragabb.Name} irodára történt, teljes ár: {legdragabb.TotalPrice:N0} euró");<br>
<br>
            int kulonbozoIrodakSzama = berlesek.Select(b => b.OfficeId).Distinct().Count();<br>
            Console.WriteLine($"Összesen {kulonbozoIrodakSzama} különböző irodát béreltek ki.");<br>
<br>
            var legtobbszorBerelt = berlesek.GroupBy(b => b.Name)<br>
                .OrderByDescending(g => g.Count())<br>
                .First();<br>
            Console.WriteLine($"A legtöbbször bérelt iroda: {legtobbszorBerelt.Key} ({legtobbszorBerelt.Count()} bérlés)");<br>
<br>
            Console.WriteLine("Bérlések száma városonként:");<br>
            var varosok = berlesek.GroupBy(b => b.City)<br>
                .Select(g => new { Varos = g.Key, Darab = g.Count() });<br>
            foreach (var v in varosok)<br>
            {<br>
                Console.WriteLine($"{v.Varos}: {v.Darab} bérlés");<br>
            }<br>
<br>
            double atlagosIdotartam = berlesek.Average(b => (b.EndDate - b.StartDate).Days + 1);<br>
            Console.WriteLine($"Átlagos bérlési időtartam: {atlagosIdotartam:F2} nap");<br>
        }<br>
    }<br>
}<br>
<br>
----------------------------------------------------------------------<br>
<br>
<br>
9. A .csv filet 2 helyre lehet tenni. Az egyik ha közvetlenül csak simán bedobod a program.cs és a berles.cs fileok közé. Vagy ha ezen az elérési útvonalon beírod C:\Users\GGGGG\source\repos\OfficeRentals\OfficeRentals\bin\Debug\net8.0<br>
<p>
<h2>Console 2 csv</h2>
A or <br>
<br>
1. Microsoft Visual Studio nyitása <br>
<br>
2. Create New Project gombra kattintva átirányít hogy kiválaszd a projektet<br>
<br>
3. A sima console app választása NEM A .NET-ES VERZIÓ<br>
<br>
4. ProjectName akármi de ebben az esetben OfficeRentalApp<br>
<br>
5. Utánna a next gomb megnyomására megjelenik a Framework ami .8.0 legyen és a Do Not use top-level statements bejelülése (kipipálása)<br>
<br>
6. Create<br>
<br>
7. Miután kreálódott a projekt mivel van 2 csv ezeket ide kell helyezni (mindkettőt) C:\valami\valami\source\repos\CarsConsole\CarsConsole\bin\Debug\net8.0<br>
<br>
8. A program.cs kívül két class-t kell csinálni <br>
<br>
8/1. A car class<br>
<br>
--------------------------------------------------------<br>
<br>
using System;<br>
using System.Collections.Generic;<br>
using System.Linq;<br>
using System.Text;<br>
using System.Threading.Tasks;<br>
<br>
namespace CarsConsole<br>
{<br>
    public class Car<br>
    {<br>
        public int Id { get; set; }<br>
        public string Brand { get; set; }<br>
        public string Model { get; set; }<br>
        public string LicensePlate { get; set; }<br>
        public int Year { get; set; }<br>
        public int DailyPrice { get; set; }<br>
<br>
        public Car(string line)<br>
        {<br>
            string[] row = line.Split(",");<br>
<br>
            Id = int.Parse(row[0]);<br>
            Brand = row[1];<br>
            Model = row[2];<br>
            LicensePlate = row[3];<br>
            Year = int.Parse(row[4]);<br>
            DailyPrice = int.Parse(row[5]);<br>
        }<br>
    }<br>
}<br>
<br>
<br>
------------------------------------------------------<br>
<br>
<br>
8/2. A Booking class<br>
<br>
<br>
-------------------------------------------------------<br>
<br>
using System;<br>
using System.Collections.Generic;<br>
using System.Globalization;<br>
using System.Linq;<br>
using System.Text;<br>
using System.Threading.Tasks;<br>
<br>
namespace CarsConsole<br>
{<br>
    public class Booking<br>
    {<br>
        public int Id { get; set; }<br>
        public DateTime StartDate { get; set; }<br>
        public DateTime EndDate { get; set; }<br>
        public int CarId { get; set; }<br>
        public int TotalPrice { get; set; }<br>
        public string UserUID { get; set; }<br>
<br>
        public Booking(string line)<br>
        {<br>
            string[] row = line.Split(",");<br>
            Id = int.Parse(row[0]);<br>
            StartDate = DateTime.ParseExact(row[1], "yyyy-MM-dd", CultureInfo.InvariantCulture);<br>
            EndDate = DateTime.ParseExact(row[2], "yyyy-MM-dd", CultureInfo.InvariantCulture);<br>
            CarId = int.Parse(row[3]);<br>
            TotalPrice = int.Parse(row[4]);<br>
            UserUID = row[5];<br>
        }<br>
    }<br>
}<br>
<br>
<br>
---------------------------------------------------<br>
<br>
<br>
9. A program.cs-be kell írni ezt <br>
<br>
<br>
---------------------------------------------------<br>
<br>
using CarsConsole;<br>
using System;<br>
using System.Collections.Generic;<br>
using System.Globalization;<br>
using System.IO;<br>
using System.Linq;<br>
<br>
<br>
namespace CarBookingApp<br>
{<br>
    class Program<br>
    {<br>
        static void Main(string[] args)<br>
        {<br>
            //File beolvasás<br>
            List<Car> cars = new List<Car>();<br>
            foreach (var item in File.ReadAllLines("cars.csv").Skip(1))<br>
            {<br>
                cars.Add(new Car(item));<br>
            }<br>
            List<Booking> bookings = new List<Booking>();<br>
            foreach (var item in File.ReadAllLines("bookings.csv").Skip(1))<br>
            {<br>
                bookings.Add(new Booking(item));<br>
            }<br>
<br>
            //Feladatok<br>
            var sortedCars = cars.OrderByDescending(car => car.DailyPrice);<br>
            Console.WriteLine("1. feladat - Az autók napi bérleti díjja csökkenő sorrendben:");<br>
            foreach (var car in sortedCars)<br>
            {<br>
                Console.WriteLine($"{car.Brand} {car.Model} {car.DailyPrice}");<br>
            }<br>
<br>
            Console.WriteLine("---------------------------------------------------------------");<br>
            Console.WriteLine("2. feladat - Az összes foglalás (autó márkával + bérleti díjjal):");<br>
            foreach (var booking in bookings)<br>
            {<br>
                var car = cars.FirstOrDefault(car => car.Id == booking.CarId);<br>
                if (car != null)<br>
                {<br>
                    Console.WriteLine($"{car.Brand} {car.Model} {car.LicensePlate} {booking.TotalPrice}");<br>
                }<br>
            }<br>
<br>
            Console.WriteLine("---------------------------------------------------------------");<br>
            Console.WriteLine("3. feladat - Melyik autót foglalták le a legtöbbször:");<br>
            <br>
            var mostBooking = bookings.GroupBy(b => b.CarId)<br>
                                       .OrderByDescending(g => g.Count())<br>
                                       .FirstOrDefault();<br>
            if (mostBooking != null)<br>
            {<br>
                var carMostBooking = cars.FirstOrDefault(c => c.Id == mostBooking.Key);<br>
                if (carMostBooking != null)<br>
                {<br>
                    Console.WriteLine($"{carMostBooking.Id} {carMostBooking.Brand} {carMostBooking.Model}");<br>
                }<br>
            }<br>
<br>
            Console.WriteLine("---------------------------------------------------------------");<br>
            Console.WriteLine("4. feladat - A legtöbb bevételt hozó autó:");<br>
            var mostIncomeCarId = bookings.GroupBy(b => b.CarId)<br>
                                           .OrderByDescending(x => x.Sum(d => d.TotalPrice))<br>
                                           .FirstOrDefault();<br>
            if (mostIncomeCarId != null)<br>
            {<br>
                var mostIncomeCar = cars.FirstOrDefault(c => c.Id == mostIncomeCarId.Key);<br>
                if (mostIncomeCar != null)<br>
                {<br>
                    Console.WriteLine($"{mostIncomeCar.Id} {mostIncomeCar.Brand} {mostIncomeCar.Model} {mostIncomeCar.LicensePlate}");<br>
                }<br>
            }<br>
<br>
            Console.WriteLine("---------------------------------------------------------------");<br>
            Console.WriteLine("5. feladat - Az átlagos bérleti időtartam");<br>
            var avgDays = bookings.Select(b => (b.EndDate - b.StartDate).Days).Average();<br>
            Console.WriteLine(avgDays);<br>
<br>
            Console.WriteLine("---------------------------------------------------------------");<br>
            Console.WriteLine("6. feladat - A legutóbb foglalt autó adatai");<br>
            var lastBooking = bookings.OrderByDescending(b => b.StartDate).FirstOrDefault();<br>
            if (lastBooking != null)<br>
            {<br>
                var lastBookingCar = cars.FirstOrDefault(c => c.Id == lastBooking.CarId);<br>
                if (lastBookingCar != null)<br>
                {<br>
                    Console.WriteLine($"{lastBooking.StartDate:yyyy.MM.dd} {lastBookingCar.Brand} {lastBookingCar.Model} {lastBookingCar.LicensePlate} {lastBookingCar.Year} {lastBookingCar.DailyPrice}");<br>
                }<br>
            }<br>
<br>
            Console.WriteLine("---------------------------------------------------------------");<br>
            Console.WriteLine("7. feladat - Az összes foglalásból származó teljes bevétel");<br>
            var fullIncome = bookings.Select(b => b.TotalPrice).Sum();<br>
            Console.WriteLine(fullIncome);<br>
<br>
<br>
            Console.WriteLine("---------------------------------------------------------------");<br>
            Console.WriteLine("8. feladat - Listázás:");<br>
<br>
            var monthlyBookings = bookings<br>
                .GroupBy(b => b.StartDate.ToString("yyyy-MM", CultureInfo.InvariantCulture))<br>
                .OrderBy(g => g.Key);<br>
<br>
            using (StreamWriter writer = new StreamWriter("foglalasok.csv"))<br>
            {<br>
                writer.WriteLine("Month, CarId, StartDate, EndDate, TotalPrice");<br>
<br>
                foreach (var group in monthlyBookings)<br>
                {<br>
                    foreach (var booking in group)<br>
                    {<br>
                        writer.WriteLine($"{group.Key}, {booking.CarId}, {booking.StartDate:yyyy.MM.dd}, {booking.EndDate:yyyy.MM.dd}, {booking.TotalPrice}");<br>
                    }<br>
                }<br>
            }<br>
<br>
            Console.WriteLine("A foglalások havi bontásban kiírva a 'foglalasok.csv' fájlba.");<br>
<br>
<br>
            Console.WriteLine("---------------------------------------------------------------");<br>
            Console.WriteLine("9. feladat");<br>
<br>
            var carIncome = bookings<br>
                .GroupBy(b => b.CarId)<br>
                .Select(g => new<br>
                {<br>
                    CarId = g.Key,<br>
                    TotalIncome = g.Sum(b => b.TotalPrice)<br>
                })<br>
                .OrderByDescending(x => x.TotalIncome);<br>
<br>
            using (StreamWriter writer = new StreamWriter("bevetes.csv"))<br>
            {<br>
                writer.WriteLine("CarId, TotalIncome");<br>
<br>
                foreach (var item in carIncome)<br>
                {<br>
                    writer.WriteLine($"{item.CarId}, {item.TotalIncome}");<br>
                }<br>
            }<br>
<br>
            Console.WriteLine("Az autóként összesített bevételek kiírva a 'bevetes.csv' fájlba.");<br>
<br>
<br>
            Console.WriteLine("---------------------------------------------------------------");<br>
            Console.WriteLine("10. feladat");<br>
<br>
            var unusedCars = cars.Where(car => !bookings.Any(b => b.CarId == car.Id)).ToList();<br>
<br>
            using (StreamWriter writer = new StreamWriter("nemhasznalt.csv"))<br>
            {<br>
                writer.WriteLine("Id, Brand, Model, LicensePlate, Year, DailyPrice");<br>
<br>
                foreach (var car in unusedCars)<br>
                {<br>
                    writer.WriteLine($"{car.Id}, {car.Brand}, {car.Model}, {car.LicensePlate}, {car.Year}, {car.DailyPrice}");<br>
                }<br>
            }<br>
<br>
            Console.WriteLine("A nem használt autók kiírva a 'nemhasznalt.csv' fájlba.");<br>
<br>
<br>
            Console.WriteLine("---------------------------------------------------------------");<br>
            Console.WriteLine("11. feladat");<br>
<br>
            var averageDailyPriceByBrand = cars<br>
                .GroupBy(c => c.Brand)<br>
                .Select(g => new<br>
                {<br>
                    Brand = g.Key,<br>
                    AveragePrice = g.Average(c => c.DailyPrice)<br>
                })<br>
                .OrderBy(x => x.Brand);<br>
<br>
            using (StreamWriter writer = new StreamWriter("berkat.csv"))<br>
            {<br>
                writer.WriteLine("Brand, AverageDailyPrice");<br>
<br>
                foreach (var item in averageDailyPriceByBrand)<br>
                {<br>
                    writer.WriteLine($"{item.Brand}, {item.AveragePrice:F2}");<br>
                }<br>
            }<br>
<br>
            Console.WriteLine("Az autók átlagos napi bérleti díja márkánként kiírva a 'berkat.csv' fájlba.");<br>
<br>
<br>
<br>
<br>
        }<br>
<br>
    }<br>
}<br>
<br>
<br>
----------------------------------------------------------------------------------- <br>
<p>
<h2>Frontend</h2><br>
Az or <br>
<br>
1. Az első hogy csinálni kell egy mappát bármilyen névvel aztán a mappán belül egy cmd nyitása<br>
<br>
2. A parancs amit ki kell adni egy Angular Projekt generáláshoz az ng n OfficeFrontend --standalone=false. Itt fontos hogy az ng n után lévő név bármi lehet de a <br>
--standalone=false kötelező mert anélkül rengeteg minden nem működik<br>
<br>
3. Amikor a parancs ki lett adva akkor sok dolgot kér a telepítésnél vagyis a kreálásnál<br>
<br>
3/1. A google-s kérdésnél mindegy mit nyomsz de ajánlott no mert itt csak a Google felügyelet alávételéről kérdez<br>
<br>
3/2. Utánna rákérdez hogy milyen legyen a stylesheet format aminél ajánlott a CSS-t kell megnyomni<br>
<br>
3/3. Megkérdezi hogy legyen Server-Side Rendering amire a válasz no vagyis nem <br>
<br>
4. Utánna miután kreálódott a projekt kell egy ng add @ng-bootstrap/ng-bootstrap@17.0.0 (de nekem csak a 18.00-as verzióval működik ezért elég lehagyni a @17.0.0 részt)<br>
<br>
5. Miután megtörtént a bootstrap telepítése kell kiadni ezeket a parancsokat <br>
<br>
5/1. Az egyik az ng g c OfficesLists, a másik az ng g c Home, a harmadik a ng g c Navbar<br>
<br>
5/2. Itt is folytatódik az előző menet amikor is nem komponenseket hanem service-t csinálunk. Az első parancs ng g s Base. <br>
<br>
6. A code . parancs kiadása és a visual studio code megnyitása<br>
<br>
7. Az angular.json fileban a "styles": [<br>
               "node_modules/bootstrap/dist/css/bootstrap.min.css",<br>
              "src/styles.css"<br>
            ],<br>
résznél a "node_modules/bootstrap/dist/css/bootstrap.min.css" kimásolása és beillesztése az alatta lévő "scripts": [] részbe. De fontos hogy át kell írni a css részeket js-re<br>
és a min-t és bundle-re szóval így kell hogy kinézzen "scripts": [  "node_modules/bootstrap/dist/js/bootstrap.bundle.js"]<br>
<br>
----------------------------------------<br>
angular.json<br>
<br>
{<br>
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",<br>
  "version": 1,<br>
  "newProjectRoot": "projects",<br>
  "projects": {<br>
    "OfficeFrontend": {<br>
      "projectType": "application",<br>
      "schematics": {<br>
        "@schematics/angular:component": {<br>
          "standalone": false<br>
        },<br>
        "@schematics/angular:directive": {<br>
          "standalone": false<br>
        },<br>
        "@schematics/angular:pipe": {<br>
          "standalone": false<br>
        }<br>
      },<br>
      "root": "",<br>
      "sourceRoot": "src",<br>
      "prefix": "app",<br>
      "architect": {<br>
        "build": {<br>
          "builder": "@angular-devkit/build-angular:application",<br>
          "options": {<br>
            "outputPath": "dist/office-frontend",<br>
            "index": "src/index.html",<br>
            "browser": "src/main.ts",<br>
            "polyfills": [<br>
              "zone.js",<br>
              "@angular/localize/init"<br>
            ],<br>
            "tsConfig": "tsconfig.app.json",<br>
            "assets": [<br>
              {<br>
                "glob": "**/*",<br>
                "input": "public"<br>
              }<br>
            ],<br>
            "styles": [<br>
               "node_modules/bootstrap/dist/css/bootstrap.min.css",<br>
              "src/styles.css"<br>
            ],<br>
            "scripts": [  "node_modules/bootstrap/dist/js/bootstrap.bundle.js"]<br>
          },<br>
          "configurations": {<br>
            "production": {<br>
              "budgets": [<br>
                {<br>
                  "type": "initial",<br>
                  "maximumWarning": "500kB",<br>
                  "maximumError": "1MB"<br>
                },<br>
                {<br>
                  "type": "anyComponentStyle",<br>
                  "maximumWarning": "2kB",<br>
                  "maximumError": "4kB"<br>
                }<br>
              ],<br>
              "outputHashing": "all"<br>
            },<br>
            "development": {<br>
              "optimization": false,<br>
              "extractLicenses": false,<br>
              "sourceMap": true<br>
            }<br>
          },<br>
          "defaultConfiguration": "production"<br>
        },<br>
        "serve": {<br>
          "builder": "@angular-devkit/build-angular:dev-server",<br>
          "configurations": {<br>
            "production": {<br>
              "buildTarget": "OfficeFrontend:build:production"<br>
            },<br>
            "development": {<br>
              "buildTarget": "OfficeFrontend:build:development"<br>
            }<br>
          },<br>
          "defaultConfiguration": "development"<br>
        },<br>
        "extract-i18n": {<br>
          "builder": "@angular-devkit/build-angular:extract-i18n"<br>
        },<br>
        "test": {<br>
          "builder": "@angular-devkit/build-angular:karma",<br>
          "options": {<br>
            "polyfills": [<br>
              "zone.js",<br>
              "zone.js/testing",<br>
              "@angular/localize/init"<br>
            ],<br>
            "tsConfig": "tsconfig.spec.json",<br>
            "assets": [<br>
              {<br>
                "glob": "**/*",<br>
                "input": "public"<br>
              }<br>
            ],<br>
            "styles": [<br>
              "src/styles.css"<br>
            ],<br>
            "scripts": []<br>
          }<br>
        }<br>
      }<br>
    }<br>
  }<br>
}<br>
<br>
---------------------------------------------------------------<br>
<br>
8. Miután az átírások megtörténtek az mappékon belül az src-re kattintva és azon belül az app fül és azon belül app.module.ts<br>
<br>
9. Az app.module.ts-en belül a providers-be bele kell írni a provideHttpClient()-et szóval így kell kinézzen providers: [provideHttpClient()], és fontos hogy legyen <br>
beimportálva az oldal tetején is ami így kell kinézzen import { provideHttpClient } from '@angular/common/http';<br>
<br>
10. Utánna felette az imports részbe be kell írni hogy FormsModule nyilván ott is figyelni hogy be legyen importálva. Szóval így kell kinézzen<br>
  imports: [<br>
    BrowserModule,<br>
    AppRoutingModule,<br>
    NgbModule, <br>
    FormsModule<br>
  ],<br>
<br>
és az import meg így import { FormsModule } from '@angular/forms';<br>
<br>
----------------------------------------------------------<br>
app.module.ts<br>
<br>
import { NgModule } from '@angular/core';<br>
import { BrowserModule } from '@angular/platform-browser';<br>
<br>
import { AppRoutingModule } from './app-routing.module';<br>
import { AppComponent } from './app.component';<br>
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';<br>
import { OfficesListsComponent } from './offices-lists/offices-lists.component';<br>
import { HomeComponent } from './home/home.component';<br>
import { NavbarComponent } from './navbar/navbar.component';<br>
import { provideHttpClient } from '@angular/common/http';<br>
import { FormsModule } from '@angular/forms';<br>
<br>
@NgModule({<br>
  declarations: [<br>
    AppComponent,<br>
    OfficesListsComponent,<br>
    HomeComponent,<br>
    NavbarComponent<br>
  ],<br>
  imports: [<br>
    BrowserModule,<br>
    AppRoutingModule,<br>
    NgbModule,<br>
    FormsModule<br>
  ],<br>
  providers: [provideHttpClient()],<br>
  bootstrap: [AppComponent]<br>
})<br>
export class AppModule { }<br>
<br>
---------------------------------------------------------------<br>
<br>
11. Utánna az app-routing.module.ts-be kell a const routes: Routes = []; részbe beleírni a következőt és így kell kinézzen és fontosak az importok is hogy meglegyenek<br>
const routes: Routes = [<br>
  {path:"", component: HomeComponent},<br>
  {path:"", component: OfficesListsComponent},<br>
];<br>
<br>
Az importok<br>
import { OfficesListsComponent } from './offices-lists/offices-lists.component';<br>
import { HomeComponent } from './home/home.component';<br>
<br>
12. Miután ezek megtörténtek az app.component.html-ben található adatok teljes kitörlése cntrl+a és delete gomb megnyomásával <br>
<br>
13. A html-be ezt kell írni <br>
------------------------------------ <br>
&lt;app-navbar&gt;&lt;/app-navbar&gt; <br>
&lt;div class="container"&gt;<br>
&lt;  <router-outlet>&lt;/router-outlet&gt;<br>
&lt;/div&gt;<br>
<br>
-----------------------------------<br>
<br>
14. Utánna a navbar mappában a navbar.component.html-t kell módosítani úgy hogy egy esetleges bootstrap oldaláról lehalászott navbart teszel be vagy ezt<br>
---------------------------------------<br>
&lt;nav class="navbar navbar-expand-lg navbar-dark bg-dark py-4"&gt;<br>
&lt;    div class="container-fluid"&gt;<br>
&lt;      a class="navbar-brand" href="#"&gt;Office Sphere&lt;/a&gt;<br>
&lt;      button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"&gt;<br>
&lt;        span class="navbar-toggler-icon"&gt;&lt;/span&gt;<br>
&lt;      /button&gt;<br>
&lt;      div class="collapse navbar-collapse" id="navbarSupportedContent"&gt;<br>
&lt;        ul class="navbar-nav me-auto mb-2 mb-lg-0"&gt;<br>
&lt;          li class="nav-item"&gt;<br>
&lt;            a class="nav-link active" aria-current="page" routerLink="offices"&gt;Rent Office&lt;/a&gt;<br>
&lt;          /li&gt;<br>
&lt;        /ul&gt;<br>
&lt;        form class="d-flex"&gt;<br>
&lt;          input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"&gt;<br>
&lt;          button class="btn btn-outline-success" type="submit"&gt;Search&lt;/button&gt;<br>
&lt;        /form&gt;<br>
&lt;      /div&gt;<br>
&lt;    /div&gt;<br>
&lt;/nav&gt;<br>
<br>
--------------------------------------<br>
<br>
15. Utánna a home mappában a home.component.css megnyitása ami így néz ki <br>
---------------------------------------<br>
&lt;.header{&gt;<br>
&lt;    width:30%!important; &gt;<br>
&lt;}&gt;<br>
&lt;.cim{&gt;<br>
&lt;    margin:0!important;&gt;<br>
&lt;    padding:0!important;&gt;<br>
&lt;    line-height: .8;&gt;<br>
&lt;}&gt;<br>
&lt;.green{&gt;<br>
&lt;    color: #72dd78 !important;&gt;<br>
&lt;}&gt;<br>
&lt;.lead{&gt;<br>
&lt;    margin-top: 2rem;&gt;<br>
&lt;}&gt;<br>
&lt;.box h2{&gt;<br>
&lt;    margin:0!important;&gt;<br>
&lt;}&gt;<br>
&lt;.box h2::first-letter {&gt;<br>
&lt;    color: #72dd78;&gt;<br>
&lt;    font-size: 100px;&gt;<br>
&lt;    font-weight: 700;&gt;<br>
&lt;}&gt;<br>
&lt;.box .lead{&gt;<br>
&lt;    margin-top: 0!important;&gt;<br>
&lt;}&gt;<br>
<br>
--------------------------------------<br>
<br>
16. Aztán ugyanebben a mappában a home.component.html így kell hogy kinézzen<br>
-----------------------------------<br>
&lt;div class="container"&gt;<br>
&lt;    div class="row my-5"&gt;<br>
&lt;        div class="col-12 col-md-6 mb-3"&gt;<br>
&lt;            p class="cim display-4"&gt;The Best&lt;/p&gt;<br>
&lt;            p class="cim fw-bold display-4"&gt;Private Office Experience, Luxury in the City.&lt;/p&gt;<br>
&lt;            p class="cim green fw-bold display-4"&gt;GlobalSpaces&lt;/p&gt;<br>
&lt;            p class="d-none d-lg-block lead"&gt;<br>
&lt;                GlobalSpaces brings you the magic of premium private office experiences!&gt;<br>
&lt;                We all know the chaos that comes with crowded co-working spaces and the hassle of finding suitable meeting rooms – endless hours spent on bookings, logistics, and compromises.&gt;<br>
&lt;                Why not choose complete freedom and comfort instead?&gt;<br>
&lt;                Enjoy your own private office space with your team, clients, or partners – the true meaning of professional productivity and peace of mind.&gt;<br>
&lt;            /p&gt;<br>
&lt;        /div&gt;<br>
&lt;        div class="col-12 col-md-6"&gt;<br>
&lt;            img src="/assets/office1.jpg" class="img-fluid" alt="Office Space 1"&gt;<br>
&lt;        /div&gt;<br>
&lt;    /div&gt;<br>
<br>
&lt;    div class="row my-5"&gt;<br>
&lt;        div class="col-12 col-md-6 order-2 order-md-1"&gt;<br>
&lt;            img src="/assets/office2.jpg" class="img-fluid" alt="Office Space 2"&gt;<br>
&lt;        /div&gt;<br>
&lt;        div class="box col-12 col-md-6 order-1"&gt;<br>
&lt;            h2&gt;About Us&lt;/h2&gt;<br>
&lt;            h5&gt;GlobalSpaces – Redefining Office Rentals&lt;/h5&gt;<br>
&lt;            p class="lead"&gt;<br>
&lt;                GlobalSpaces embodies modern luxury and flexibility in workspace solutions.&gt;<br>
&lt;                Our network features meticulously selected, world-class office spaces, offering the perfect environment for daily work, corporate events, client meetings, or project collaborations.&gt;<br>
&lt;                Whether you're looking for a short-term spot or a long-term base, you'll find the ideal office with us – complete with personalized services, premium facilities, and professional support.&gt;<br>
&lt;                Experience unlimited productivity and maximum comfort with GlobalSpaces.&gt;<br>
&lt;            /p&gt;<br>
&lt;        /div&gt;<br>
&lt;    /div&gt;<br>
<br>
&lt;    div class="row my-5"&gt;<br>
&lt;        div class="box col-12 col-md-6"&gt;<br>
&lt;            h2&gt;Offices&lt;/h2&gt;<br>
&lt;            h5&gt;The World's Finest Offices for Your Perfect Workdays&lt;/h5&gt;<br>
&lt;            p class="lead"&gt;<br>
&lt;                Our collection of office spaces perfectly blends modern design and professional elegance.&gt;<br>
&lt;                Whether you seek sleek private offices, dynamic co-working areas, or prestigious corporate suites – we offer a wide selection to meet every business need.&gt;<br>
&lt;                Our offices feature the latest technology, spacious workstations, meeting rooms, relaxation zones, and premium amenities.&gt;<br>
&lt;                Let our expert team help you find the perfect office space to make every workday truly exceptional!&gt;<br>
&lt;            /p&gt;<br>
&lt;        /div&gt;<br>
&lt;        div class="col-12 col-md-6"&gt;<br>
&lt;            img src="/assets/office3.png" class="img-fluid" alt="Office Space 3"&gt;<br>
&lt;        /div&gt;<br>
&lt;    /div&gt;<br>
&lt;/div&gt;<br>
<br>
<br>
-----------------------------------<br>
<br>
17. Miután ez megtörtént a projekt public mappájában kell egy új mappát létrehozni ami az assets és ide kerülnek a képek <br>
C:\Users\Desktop\Valami\Frontend\Frontend\OfficeFrontend\public<br>
<br>
18. Ezután a base.service.ts-be kell a konstruktorba írni és így kell kinézzen az egész <br>
----------------------------------------------------<br>
import { HttpClient } from '@angular/common/http';<br>
import { Injectable } from '@angular/core';<br>
<br>
@Injectable({<br>
  providedIn: 'root'<br>
})<br>
export class BaseService {<br>
  officesApi="https://p161-7ddfd-default-rtdb.europe-west1.firebasedatabase.app/offices.json"<br>
  constructor(private http:HttpClient) { }<br>
    getOffices(){<br>
    return this.http.get(this.officesApi)<br>
  }<br>
  postOfficeRental(body:any){<br>
    return this.http.post("https://localhost:7086/api/Berlesek", body)<br>
  }<br>
}<br>
-----------------------------------------------------<br>
<br>
19. Aztán az offices-list.component.css-be kell írni és így kell hogy kinézzen <br>
-----------------------------------------------------<br>
&lt;.custom-day {&gt;<br>
&lt;    text-align: center;&gt;<br>
&lt;    padding: 0.185rem 0.25rem;&gt;<br>
&lt;    display: inline-block;&gt;<br>
&lt;    height: 2rem;&gt;<br>
&lt;    width: 2rem;&gt;<br>
&lt;}&gt;<br>
&lt;.custom-day.focused {&gt;<br>
&lt;    background-color: #e6e6e6;&gt;<br>
&lt;}&gt;<br>
&lt;.custom-day.range,&gt;<br>
&lt;.custom-day:hover {&gt;<br>
&lt;    background-color: rgb(114, 221, 120);&gt;<br>
&lt;    color: white;&gt;<br>
&lt;}&gt;<br>
&lt;.custom-day.faded {&gt;<br>
&lt;    background-color: rgba(114, 221, 120,.5)&gt;<br>
&lt;}&gt;<br>
&lt;button{&gt;<br>
&lt;    background-color:  rgba(114, 221, 120,1)!important;&gt;<br>
&lt;    border: 1px solid rgb(114, 221, 120)!important ;&gt;<br>
&lt;}&gt;<br>
<br>
<br>
-----------------------------------------------------<br>
<br>
20. Utánna meg az offices-lists.component.ts-be kell ezeket beleírni<br>
..................................................<br>
&lt;import { HttpErrorResponse } from '@angular/common/http';&gt;<br>
&lt;import { Component, inject } from '@angular/core';&gt;<br>
&lt;import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';&gt;<br>
&lt;import { BaseService } from '../base.service';&gt;<br>
&lt;&gt;<br>
&lt;@Component({&gt;<br>
&lt;  selector: 'app-offices-lists',&gt;<br>
&lt;  templateUrl: './offices-lists.component.html',&gt;<br>
&lt;  styleUrl: './offices-lists.component.css'&gt;<br>
&lt;})&gt;<br>
&lt;export class OfficesListsComponent {&gt;<br>
&lt;  calendar = inject(NgbCalendar);&gt;<br>
&lt;  date: NgbDate | null = null;&gt;<br>
&lt;  hoveredDate: NgbDate | null = null;&gt;<br>
&lt;  fromDate: NgbDate = this.calendar.getNext(this.calendar.getToday(),'d',1);&gt;<br>
&lt;  toDate: NgbDate |null = this.calendar.getNext(this.fromDate, 'd', 2);&gt;<br>
&lt;&gt;<br>
&lt;  offices:any&gt;<br>
&lt;  newRental:any={}&gt;<br>
&lt;  // rentals:any&gt;<br>
&lt;  error=false&gt;<br>
&lt;  success=false&gt;<br>
&lt;  errorMessage:any&gt;<br>
&lt;  cart:any=null&gt;<br>
&lt;&gt;<br>
&lt;  constructor(private base:BaseService){&gt;<br>
&lt;    this.base.getOffices().subscribe(&gt;<br>
&lt;      (j)=&gt;this.offices=j&gt;<br>
&lt;    )&gt;<br>
&lt;  }&gt;<br>
&lt;&gt;<br>
&lt;  addCart(office:any){&gt;<br>
&lt;    this.cart=office;&gt;<br>
&lt;  }&gt;<br>
&lt;&gt;<br>
&lt;  deleteItem(){&gt;<br>
&lt;    this.cart=null&gt;<br>
&lt;  }&gt;<br>
&lt;&gt;<br>
&lt;  postRental(){&gt;<br>
&lt;    const body={&gt;<br>
&lt;      uid:"101",&gt;<br>
&lt;      startDate: this.ngbDateToDateString(this.fromDate),&gt;<br>
&lt;      endDate: this.toDate?this.ngbDateToDateString(this.toDate):0,&gt;<br>
&lt;      officeId:this.cart.id,&gt;<br>
&lt;      dailyRate:this.cart.daily_price,&gt;<br>
&lt;      baseFee:this.cart.base_fee&gt;<br>
&lt;    }&gt;<br>
&lt;&gt;<br>
&lt;    console.log(body)&gt;<br>
&lt;    this.base.postOfficeRental(body).subscribe(&gt;<br>
&lt;      {&gt;<br>
&lt;        next:(a)=&gt;{&gt;<br>
&lt;          this.error=false&gt;<br>
&lt;          this.success=true;&gt;<br>
&lt;        },&gt;<br>
&lt;        error: (e: HttpErrorResponse) =&gt; {&gt;<br>
&lt;          console.log("hiba", e)&gt;<br>
&lt;          this.success = false;&gt;<br>
&lt;          this.error = true;&gt;<br>
&lt;          const statusCode = e.status;&gt;<br>
&lt;          const serverMessage = typeof e.error === 'string'&gt;<br>
&lt;            ? e.error&gt;<br>
&lt;            : e.error?.message || 'An unknown error occurred.' &gt;<br>
&lt;          this.errorMessage=serverMessage&gt;<br>
&lt;        }&gt;<br>
&lt;    })&gt;<br>
&lt;  }&gt;<br>
&lt;&gt;<br>
&lt;  onDateSelection(date: NgbDate) {&gt;<br>
&lt;    if (!this.fromDate && !this.toDate) {&gt;<br>
&lt;      this.fromDate = date;&gt;<br>
&lt;    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {&gt;<br>
&lt;      this.toDate = date;&gt;<br>
&lt;    } else {&gt;<br>
&lt;      this.toDate = null;&gt;<br>
&lt;      this.fromDate = date;&gt;<br>
&lt;    }&gt;<br>
&lt;  }&gt;<br>
&lt;&gt;<br>
&lt;  isHovered(date: NgbDate) {&gt;<br>
&lt;    return (&gt;<br>
&lt;      this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)&gt;<br>
&lt;    );&gt;<br>
&lt;  }&gt;<br>
&lt;&gt;<br>
&lt;  isInside(date: NgbDate) {&gt;<br>
&lt;    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);&gt;<br>
&lt;  }&gt;<br>
&lt;&gt;<br>
&lt;  isRange(date: NgbDate) {&gt;<br>
&lt;    return (&gt;<br>
&lt;      date.equals(this.fromDate) ||&gt;<br>
&lt;      (this.toDate && date.equals(this.toDate)) ||&gt;<br>
&lt;      this.isInside(date) ||&gt;<br>
&lt;      this.isHovered(date)&gt;<br>
&lt;    );&gt;<br>
&lt;  }&gt;<br>
&lt;&gt;<br>
&lt;  ngbDateToDateString(ngbDate: NgbDateStruct): string {&gt;<br>
&lt;    const year = ngbDate.year;&gt;<br>
&lt;    const month = String(ngbDate.month).padStart(2, '0');&gt;<br>
&lt;    const day = String(ngbDate.day).padStart(2, '0');&gt;<br>
&lt;    const s = dollarjel{year}-dollarjel{month}-dollarjel{day} anniyi hogy a dollarjeles részt két alt+7 közé kell tenni;&gt;<br>
&lt;    return s;&gt;<br>
&lt;  }&gt;<br>
&lt;}&gt;<br>
<br>
.......................................................<br>
<br>
21. Aztán az offices-list.component.html-be kell beleírni ezt<br>
.......................................................<br>
    <br>
    <br>
   &lt;div class="container"&gt;<br>
&lt;    div id="wrapper"&gt;<br>
&lt;        h2 class="display-2 my-5"&gt;Office Rentals&lt;/h2&gt;<br>
&lt;        div id="calendar"&gt;<br>
&lt;            ngb-datepicker #dp (dateSelect)="onDateSelection($event)" [displayMonths]="1" [dayTemplate]="t" outsideDays="hidden"&gt;<br>
&lt;            /ngb-datepicker&gt;<br>
&lt;            ng-template #t let-date let-focused="focused"&gt;<br>
&lt;              span<br>
&lt;                class="custom-day"&gt;<br>
&lt;                [class.focused]="focused"&gt;<br>
&lt;                [class.range]="isRange(date)"&gt;<br>
&lt;                [class.faded]="isHovered(date) || isInside(date)"&gt;<br>
&lt;                (mouseenter)="hoveredDate = date"&gt;<br>
&lt;                (mouseleave)="hoveredDate = null"&gt;<br>
&lt;                {{ date.day }}&gt;<br>
&lt;              /span&gt;<br>
&lt;            /ng-template&gt;<br>
&lt;        /div&gt;<br>
&lt;        div *ngIf="cart" id="cart"&gt;<br>
&lt;            h4 class="mt-4"&gt;Selected Offices&lt;/h4&gt;<br>
&lt;            div class="row my-1"&gt;<br>
&lt;              div class="col"&gt;{{cart.name}}&lt;/div&gt;<br>
&lt;              div class="col"&gt;{{cart.address}}&lt;/div&gt;<br>
&lt;              div class="col"&gt;{{cart.daily_price}} € / day&lt;/div&gt;<br>
&lt;              div class="col"&gt;{{cart.base_fee}} € base fee&lt;/div&gt;<br>
&lt;              div class="col"&gt;<br>
&lt;                button (click)="deleteItem()" type="button" class="btn btn-primary btn-sm"&gt;Remove&lt;/button&gt;<br>
&lt;              /div&gt;<br>
&lt;              div class="d-none d-md-block col"&gt;&lt;/div&gt;<br>
&lt;              div class="d-none d-md-block col"&gt;&lt;/div&gt;<br>
&lt;              div class="d-none d-md-block col"&gt;&lt;/div&gt;<br>
&lt;              div class="d-none d-md-block col"&gt;&lt;/div&gt;<br>
&lt;            /div&gt;<br>
&lt;            hr&gt;<br>
&lt;        /div&gt;<br>
&lt;    /div&gt;<br>
&lt;    div class="my-5"&gt;<br>
&lt;        div *ngIf="error" class="alert alert-danger" role="alert"&gt;<br>
&lt;            h3&gt;Reservation Failed&lt;/h3&gt;<br>
&lt;            p&gt;{{errorMessage}}&lt;/p&gt;<br>
&lt;        /div&gt;<br>
&lt;        div *ngIf="success" class="alert alert-success" role="alert"&gt;<br>
&lt;            h3&gt;Reservation Successful&lt;/h3&gt;<br>
&lt;            p&gt;Wishing you a productive time!&lt;/p&gt;<br>
&lt;        /div&gt;<br>
&lt;    /div&gt;<br>
&lt;    button type="button" (click)="postRental()" [disabled]="!cart" class="btn btn-primary my-2"&gt;Submit Reservation&lt;/button&gt;<br>
&lt;    div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 my-3"&gt;<br>
&lt;        div *ngFor="let office of offices" class="col"&gt;<br>
&lt;            div class="card h-100"&gt;<br>
&lt;              img [src]="office.image" class="card-img-top" [alt]="office.name"&gt;<br>
&lt;              div class="card-body"&gt;<br>
&lt;                h5 class="card-title"&gt;{{office.name}}&lt;/h5&gt;<br>
&lt;                h6 class="card-title"&gt;Address: {{office.address}}&lt;/h6&gt;<br>
&lt;                div class="row text-center mt-3"&gt;<br>
&lt;                  div class="col"&gt;Area (m²)&lt;/div&gt;<br>
&lt;                /div&gt;<br>
&lt;                div class="row text-center mt-1"&gt;<br>
&lt;                  div class="col"&gt;{{office.area_m2}}&lt;/div&gt;<br>
&lt;                /div&gt;<br>
&lt;                p class="mt-3"&gt;<br>
&lt;                  Base Fee: {{office.base_fee}} €&gt;<br>
&lt;                /p&gt;<br>
&lt;                p&gt;<br>
&lt;                  Daily Price: {{office.daily_price}} € / day&gt;<br>
&lt;                /p&gt;<br>
&lt;              /div&gt;<br>
&lt;              div class="card-footer"&gt;<br>
&lt;                small class="text-muted"&gt;<br>
&lt;                  button (click)="addCart(office)" type="button" class="btn btn-primary"&gt;Reserve&lt;/button&gt;<br>
&lt;                /small&gt;<br>
&lt;              /div&gt;<br>
&lt;            /div&gt;<br>
&lt;        /div&gt;<br>
&lt;    /div&gt;<br>
&lt;/div&gt;<br>
<br>
    <br>  
.......................................................<br>
<br>
22. Miután ezek mind megtörténtek akkor egy teszt alapján egy ng serve -o <br>
<br>
`
  };

  const handleClick = (section) => {
    setNote(notes[section]);
    setIsPopupOpen(true);  // Pop-up megjelenítése
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      {/* Első szekció */}
      <section onClick={() => handleClick("Frontend")}>
        <h1>Frontend</h1>
      </section>

      {/* Második szekció */}
      <section onClick={() => handleClick("Backend")}>
        <h1>Backend</h1>
      </section>

      {/* Harmadik szekció */}
      <section onClick={() => handleClick("Console")}>
        <h1>Console</h1>
      </section>

      {/* Negyedik szekció */}
      <section onClick={() => handleClick("Desktop")}>
        <h1>Desktop</h1>
      </section>

      {/* Ötödik szekció */}
      <section onClick={() => handleClick("Weboldal")}>
        <h1>Weboldal</h1>
      </section>

        <section onClick={() => handleClick("Minden")}>
        <h1>Minden</h1>
      </section>

      {/* Pop-up ablak */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Részek</h2>
            <div
              className="popup-content"
              dangerouslySetInnerHTML={{ __html: note }}
            ></div>
            <button onClick={closePopup}>Bezárás</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
