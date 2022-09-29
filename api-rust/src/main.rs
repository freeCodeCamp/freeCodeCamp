#[macro_use]
extern crate rocket;

// Add modules to crate
mod api;
mod boot;
mod models;

use api::catchers::not_found;
use api::routes::{challenges_completed, index};
use boot::mongodb_boot::MongoBoot;
use rocket_db_pools::Database;

#[launch]
async fn rocket() -> _ {
    rocket::build()
        .attach(MongoBoot::init())
        .mount("/", routes![index, challenges_completed])
        .register("/", catchers![not_found])
}
