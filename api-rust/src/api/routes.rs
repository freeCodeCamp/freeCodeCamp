use mongodb::bson::doc;
use rocket_db_pools::Connection;

use crate::{boot::mongodb_boot::MongoBoot, models::user_model::User};

#[get("/")]
pub fn index() -> &'static str {
    "Hello, world!"
}

#[post("/challenges-completed")]
pub async fn challenges_completed(db: Connection<MongoBoot>) -> &'static str {
    let a = db.database("freecodecamp");
    let b = a.collection::<User>("user");
    println!(
        "User: {:?}",
        b.find_one(doc! {"email": "bar@bar.com"}, None)
            .await
            .unwrap()
    );
    "Hello, world!"
}
