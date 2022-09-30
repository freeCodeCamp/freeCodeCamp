use rocket::serde::json::Json;
use rocket_db_pools::Connection;

use crate::{
    boot::mongodb_boot::{MongoBoot, MongoWrapper},
    models::{challenge_model::CompletedChallenge, user_model::User},
};

#[get("/")]
pub fn index() -> &'static str {
    "Hello, world!"
}

// TODO: Add request guards
#[post("/challenges-completed", data = "<completed_challenges>")]
pub async fn challenges_completed(
    db: Connection<MongoBoot>,
    completed_challenges: Json<Vec<CompletedChallenge>>,
) -> Result<Json<User>, String> {
    println!("{:?}", completed_challenges);
    let t = &completed_challenges[0];
    let code = &t.solution;
    println!("{:?}", code);

    let mongo_wrapper = MongoWrapper(db);
    if let Ok(user) = mongo_wrapper.get_user_by_email("bar@bar.com").await {
        println!("User: {:?}", user);
        Ok(Json(user))
    } else {
        Err("Unable to find user".to_string())
    }
}
