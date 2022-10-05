use actix_web::{get, post, web, HttpResponse, Responder};
use fcc::models::challenge_model::CompletedChallenge;
use mongodb::Client;
use serde::Deserialize;

use crate::boot::mongodb_boot::MongoWrapper;

#[get("/")]
pub async fn index() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[derive(Debug, Deserialize)]
pub struct CompletedChallenges(pub Vec<CompletedChallenge>);

#[post("/challenges-completed")]
pub async fn challenges_completed(
    db_client: web::Data<Client>,
    challenges: web::Json<CompletedChallenges>,
) -> impl Responder {
    println!("Request body: {:?}", challenges.0);
    let mongo_wrapper = MongoWrapper(db_client);

    match mongo_wrapper.get_user_by_email("bar@bar.com").await {
        Ok(user) => {
            println!("Found user: {:?}", user.username);
        }
        Err(e) => println!("Error: {:?}", e),
    };
    HttpResponse::Ok().body("challenges-completed")
}
