extern crate dotenv;

use dotenv::dotenv;
use mongodb::bson::{doc, extjson::de::Error};
use mongodb::Collection;
use rocket::fairing::{Fairing, Info, Kind};
use rocket::http::Status;
use rocket_db_pools::mongodb::{self, Client};
use rocket_db_pools::{Database, Pool};
use serde::{Deserialize, Serialize};
use std::env;

use crate::models::user_model::User;

#[derive(Database)]
#[database("freecodecamp")]
pub struct MongoBoot(mongodb::Client);

impl MongoBoot {
    pub async fn init() -> Self {
        dotenv().ok();
        let uri = match env::var("MONGOHQ_URL") {
            Ok(v) => v.to_string(),
            Err(_) => format!("Error loading env variable"),
        };
        let client = Client::with_uri_str(uri).await.unwrap();
        MongoBoot(client)
    }

    pub fn get_collection<'a, T>(&'a self, db_name: &str, collection_name: &str) -> Collection<T>
    where
        T: Serialize + Deserialize<'a>,
    {
        let db = self.database(db_name);
        let collection: Collection<T> = db.collection(collection_name);
        collection
    }

    pub async fn get_user_by_email(&self, email: &str) -> Result<User, Error> {
        let filter = doc! {"email": email};
        let user_detail = self
            .get_collection("freecodecamp", "user")
            .find_one(filter, None)
            .await
            .ok()
            .expect("Error getting user's detail");
        Ok(user_detail.unwrap())
    }
}

#[rocket::async_trait]
impl Fairing for MongoBoot {
    fn info(&self) -> Info {
        Info {
            name: "Mongo Boot",
            // TODO: This is still a mystery.
            kind: Kind::Ignite,
        }
    }
}

use rocket::request::{FromRequest, Outcome, Request};

#[derive(Debug)]
enum MongoError {
    NoGo,
}

trait FromRequestFrom<'r, D>: FromRequest<'r> {
    type Via: From<D>;
}

// TODO: Implement Database for MongoBoot instead of derive
#[rocket::async_trait]
impl<'r, D> FromRequest<'r> for MongoBoot
where
    D: FromRequestFrom<'r, D>,
    Self: Database + FromRequestFrom<'r, D>,
{
    type Error = MongoError;

    async fn from_request(req: &'r Request<'_>) -> Outcome<Self, Self::Error> {
        match D::fetch(req.rocket()) {
            Some(db) => Outcome::Success(MongoBoot(db)),
            None => Outcome::Failure(MongoError::NoGo),
        }
    }
}
