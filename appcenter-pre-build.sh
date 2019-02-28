#!/usr/bin/env bash
echo "Unlocking git-crypt-unlock-key"
gpg --batch --passphrase $GPG_PASSPHRASE -d git-crypt-unlock-key.gpg > ./git-crypt-unlock-key
git-crypt unlock ./git-crypt-unlock-key
