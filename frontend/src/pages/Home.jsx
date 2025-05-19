import React, { useState } from 'react';
import '../styles/Home.css';  // Ha a fájl a styles mappában van

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [note, setNote] = useState("");  // A jegyzet szövege

  // Jegyzetek hozzáadása
  const notes = {
    Frontend: "Link:https://drive.google.com/drive/folders/1LyHedkTpP6i1Kgeb_n0WqiphJOdlH-Al?usp=sharing<br>Link2:https://drive.google.com/drive/folders/1gwYNK2piM8700QsOQZcuZR_Q8Z7_Akwp?usp=sharing",
    Backend: `
<h2>Backend JSON</h2><br>
Link: https://drive.google.com/file/d/1AgzUp1qvtF7SKa44iupnH6-lUvWngBqL/view?usp=sharing<br>
1. Először hozz létre egy új Laravel projektet a következő parancs futtatásával:
<pre>composer create-project laravel/laravel JsonUpdate</pre>
<p>
A tanár szerint akkor járunk a legjobban, ha JSON-t kapunk. Ez a Laravel alapértelmezett állománya.
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
<pre>C:\\Users\\Diak\\Desktop\\TóthDániel\\20250407\\JsonUpdate\\database\\seeders</pre>
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

<h2>Backend jegyzet 2</h2><br>
Link:https://drive.google.com/file/d/1rtchoZVqW3OEIk3-yEYtGI_yJRaeKXhv/view?usp=sharing<br>
1. Először hozz létre egy új Laravel projektet a következő parancs futtatásával:
<pre>composer create-project laravel/laravel Vizsgagyak02</pre>

2. Navigálj a projekt mappájába:
<pre>cd Vizsgagyak02</pre>

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
DB_DATABASE=diak_vizsgagyak<br>
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
<pre>C:\Users\Diak\Desktop\TóthDániel\_20250331\Vizsgagyak02\storage\app\private\public</pre>
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
<h2>Saját</h2>
<h2>JSON</h2><br>
Link:https://drive.google.com/file/d/1JmnsgVKVMAngOKN7Tp7821v-GV5YD4K-/view?usp=sharing<br>
SZÓVAL HA JSON FILE VAN A VIZSGÁN AKKOR íGY MŰKÖDIK<br>
1. CMD-BEN Projekt generálás C:\Users\Diak\Desktop\.20250312\.0409>composer create-project laravel/laravel VizsgaGyakorlo*vagy saját projekt neve<br>
2. Miután a hosszas letöltés megtörtént belépünk a projekt fileba - cd *projekt neve<br>
3. Telepítjük az apikat - C:\Users\Diak\Desktop\.20250312\.0409\VizsgaGyakorlo>php artisan install:api<br>
            Itt nem migrálunk szóval amikor kérdezi hogy migráljon akkor N betű vagyis NO<br>
4. Itt egy code . de előtte még a .env-ben beírjuk az adatbázis nevét átírjuk a sqlite-ot mysqlre<br>
5. Králunk egy migrációs táblát C:\Users\Diak\Desktop\.20250312\.0409\VizsgaGyakorlo>php artisan make:migration create_rental_items_table<br>
6. Králunk egy modelt C:\Users\Diak\Desktop\.20250312\.0409\VizsgaGyakorlo>php artisan make:model RentalItem<br>
7. Králunk egy seedert C:\Users\Diak\Desktop\.20250312\.0409\VizsgaGyakorlo>php artisan make:seeder RentalItemSeeder<br>
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
8. Miután ezek mind megvannak a migrálni kell C:\Users\Diak\Desktop\_20250312\_0409\VizsgaGyakorlo>php artisan migrate ezzel létrejön az adatbázis<br>
9. De az adatbázist fel kell tölteni adattal ahhoz viszont alapvető dolog hogy a JSON formátumú file legyen a database könyvtárban és ezt adjuk le C:\Users\Diak\Desktop\_20250312\_0409\VizsgaGyakorlo>php artisan db:seed<br>
<p>

  `,

    Console: `<h2>Console 1</h2><br>
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
  `,
    Weboldal: "Nincs meg"
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

      {/* Pop-up ablak */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Jegyzet</h2>
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
