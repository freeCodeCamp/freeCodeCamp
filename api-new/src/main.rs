#[macro_use]
extern crate rocket;

// Add modules to crate
mod api;
mod boot;
mod models;

use api::catchers::not_found;
use api::routes::{challenges_completed, index};
use boot::mongodb_boot::MongoBoot;

#[launch]
async fn rocket() -> _ {
    let db = MongoBoot::init().await;
    rocket::build()
        // .manage(db)
        .attach(db)
        .mount("/", routes![index, challenges_completed])
        .register("/", catchers![not_found])
}
