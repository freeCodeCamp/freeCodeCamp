use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CompletedChallenge {
    pub challenge_type: u8,
    pub completed_date: usize,
    pub files: Vec<File>,
    pub github_link: String,
    pub id: String,
    pub is_manually_approved: bool,
    pub solution: String,
}
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SavedChallenge {
    pub challenge_type: u8,
    pub files: Vec<File>,
    pub id: String,
    pub last_saved_date: usize,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct File {
    pub contents: String,
    pub ext: String,
    pub key: String,
    pub name: String,
    pub path: String,
}
