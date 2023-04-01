<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Class Inheritance</h1>

<p>Use the "extends" keyword to inherit all methods from another class.</p>
<p>Use the "super" method to call the parent's constructor function.</p>

<p id="demo"></p>

<script>
class Dearlership {
  constructor(name) {
    this.dealership = name;
  }
  present() {
    return 'I have a ' + this.dealership;
  }
}

class City extends Dearlership {
  constructor(dealership, mod) {
    super(dealership);
    this.city = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.city;
  }
}

const myDealership = new City("Suntrup", "Sunset Hills");
document.getElementById("demo").innerHTML = myDealership.show();
</script>

</body>
</html>