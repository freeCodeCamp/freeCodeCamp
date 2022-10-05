extern crate dotenv;

use actix_web::{middleware::Logger, web, App, HttpServer};
use dotenv::dotenv;
// use fcc::models::user_model::User;
use mongodb::Client;

mod api;
mod boot;
mod middleware;

use api::routes::{challenges_completed, index};
use middleware::send_200_to_non_user;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    let uri = std::env::var("MONGOHQ_URL")
        .unwrap_or_else(|_| "mongodb://localhost:27017/freecodecamp".into());

    let client = Client::with_uri_str(uri).await.expect("failed to connect");

    println!("Listening on port: 3002");

    HttpServer::new(move || {
        let logger = Logger::default();

        App::new()
            .app_data(web::Data::new(client.clone()))
            .wrap(logger)
            .wrap(send_200_to_non_user::Send200ToNonUser)
            .service(index)
            .service(challenges_completed)
    })
    .bind(("127.0.0.1", 3002))?
    .run()
    .await
}
