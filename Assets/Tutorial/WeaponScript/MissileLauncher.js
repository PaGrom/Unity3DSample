#pragma strict
var projectile : Rigidbody;
var speed = 20;

function Start () {

}

function Update () {
	if (Input.GetButtonDown("Fire1")) {
		var instantiatedProjectile : Rigidbody = Instantiate(projectile, transform.position, transform.rotation);
		instantiatedProjectile.velocity = transform.TransformDirection(Vector3(0, 0, speed));
		Physics.IgnoreCollision( instantiatedProjectile. collider, transform.root.collider );
	}
}