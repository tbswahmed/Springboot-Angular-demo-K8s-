package tn.esprit.rh.achat.Dto;

import java.util.Set;



import lombok.Getter;
import lombok.Setter;
import tn.esprit.rh.achat.entities.CategorieFournisseur;
import tn.esprit.rh.achat.entities.DetailFournisseur;
import tn.esprit.rh.achat.entities.Facture;
import tn.esprit.rh.achat.entities.SecteurActivite;

@Getter
@Setter
public class DTOFournisseur {

	private Long idFournisseur;
	private String code;
	private String libelle;
	private CategorieFournisseur  categorieFournisseur;
	private Set<Facture> factures;
    private Set<SecteurActivite> secteurActivites;
    private DetailFournisseur detailFournisseur;
    
    public DTOFournisseur(String code, String libelle, CategorieFournisseur  categorieFournisseur,Set<Facture> factures,Set<SecteurActivite> secteurActivites,
    		DetailFournisseur detailFournisseur) {
        super();
        this.code = code;
        this.libelle = libelle;
        this.categorieFournisseur = categorieFournisseur;
        this.factures = factures;
        this.secteurActivites = secteurActivites;
        this.detailFournisseur = detailFournisseur;
    }
}
