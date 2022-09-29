use mongodb::bson::{doc, extjson::de::Error};
use mongodb::Collection;
use rocket_db_pools::mongodb::{self};
use rocket_db_pools::Database;
use serde::{Deserialize, Serialize};

use crate::models::user_model::User;

#[derive(Database)]
#[database("freecodecamp")]
pub struct MongoBoot(mongodb::Client);

impl MongoBoot {
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

